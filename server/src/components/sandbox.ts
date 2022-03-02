import progressBar from 'cli-progress';
import DockeRode from 'dockerode';
import fs from 'fs';
import os from 'os';
import { resolve } from 'path';
import { Writable } from 'stream';

import type { Language } from '~/types/language';

import languages from '@src/languages';
import stripAnsi from '@src/util/strip-ansi';

import logger from '../logger';

type RunContainerParams = {
  userID: string;
  cmd: string[];
  language: Language;
  archiveName: string;
};

class SandBox {
  private docker: DockeRode;
  private defaultFolder: string;
  private executionTimeout: number;

  constructor() {
    this.docker = new DockeRode({ socketPath: '/var/run/docker.sock' });
    this.defaultFolder = resolve(os.tmpdir(), 'code-runner');
    this.executionTimeout = 10;
  }

  private progressBar() {
    return new progressBar.Bar({
      format: 'Setting docker images [{bar}] {percentage}% ',
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true,
      clearOnComplete: true,
      emptyOnZero: true,
    });
  }

  async setup() {
    const progressBar = this.progressBar();

    const requests = Object.values(languages).map(({ language }) => {
      return this.createImage(language).then(() => {
        progressBar.increment();
      });
    });

    progressBar.start(requests.length, 0);

    await Promise.all(requests);

    progressBar.stop();
  }

  async run(params: RunContainerParams) {
    const { language, userID, cmd, archiveName } = params;

    try {
      const command = this.formatCommand(cmd, archiveName, language, userID);

      logger.info(`Running container: ${language}-container-${userID}`);

      await this.execContainer(language, userID, command);

      logger.info(
        `Container successfully executed: ${language}-container-${userID}`,
      );
    } catch (error) {
      throw new Error(
        `An error occurred while running the container: ${language}-container-${userID} ${error}`,
      );
    }
  }

  async createImage(language: Language) {
    await this.buildImage(language);
  }

  private formatCommand(
    cmd: string[],
    archiveName: string,
    language: string,
    userID: string,
  ) {
    const command = this.insertPathIntoCommand(
      cmd,
      archiveName,
      language,
      userID,
    );

    return this.setExecutionTimeout(command, this.executionTimeout);
  }

  private setExecutionTimeout(cmd: string[], time: number) {
    const command = [...cmd];

    command[2] = `timeout ${time} ${command[2]}`;

    return command;
  }

  private insertPathIntoCommand(
    cmd: string[],
    archiveName: string,
    language: string,
    userID: string,
  ) {
    const command = [...cmd];

    command[2] = command[2].replace(
      /{path}/g,
      `${this.defaultFolder}/user-${userID}/${language}/${archiveName}`,
    );

    return command;
  }

  private waitBuildImage(stream: NodeJS.ReadableStream) {
    return new Promise((resolve, reject) => {
      this.docker.modem.followProgress(stream, (err, res) =>
        err ? reject(err) : resolve(res),
      );
    });
  }

  private fixResult(data: string) {
    const dataParsed = stripAnsi(data);

    return dataParsed;
  }

  private configureWriteStream(language: string, userID: string) {
    const handler = fs.createWriteStream(
      `${this.defaultFolder}/user-${userID}/${language}/output.txt`,
    );
    const writableStream = new Writable({
      write: (chunk, _, next) => {
        const data = this.fixResult(chunk.toString());

        handler.write(data, 'utf-8');
        next();
      },
    });

    return writableStream;
  }

  async buildImage(language: Language) {
    const stream = await this.docker.buildImage(
      {
        context: resolve(__dirname, '../', 'languages', `${language}`),
        src: ['Dockerfile'],
      },
      { t: `${language}-template` },
    );

    await this.waitBuildImage(stream);
  }

  async execContainer(language: string, userID: string, cmd: string[]) {
    const writableStream = this.configureWriteStream(language, userID);

    await this.docker.run(`${language}-template`, cmd, writableStream, {
      name: `${language}-container-${userID}`,
      HostConfig: {
        AutoRemove: true,
        Binds: [
          `${this.defaultFolder}/user-${userID}:${this.defaultFolder}/user-${userID}`,
        ],
      },
    });
  }

  async getOutput(language: string, userID: string) {
    try {
      const file = await fs.promises.readFile(
        `${this.defaultFolder}/user-${userID}/${language}/output.txt`,
      );
      const output = file.toString();

      return output;
    } catch (error) {
      throw new Error(`There was an error getting the output ${error}`);
    }
  }
}

export default SandBox;
