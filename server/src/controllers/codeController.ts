import { Request, Response } from 'express';
import fs from 'fs/promises';
import { resolve } from 'path';

import type { Language } from '~/types/language';

import SandBox from '@src/components/sandbox';
import languages from '@src/languages';
import logger from '@src/logger';

const sandbox = new SandBox();

type Params = {
  language: Language;
};

interface AuthRequest extends Request {
  context?: {
    userId?: string;
  };
}

export async function getDefaultCode(req: AuthRequest, res: Response) {
  try {
    if (!req.params) {
      res.status(400).send({ error: 'No params.' });
      return;
    }

    const { language } = req.params as Params;
    const languageConfig = languages[language];
    const defaultCodePath = resolve(
      __dirname,
      '..',
      'languages',
      `${language}`,
      `hello-world.${languageConfig.extension}`,
    );

    const defaultCode = await fs.readFile(defaultCodePath);

    res.send(defaultCode);
  } catch (error) {
    logger.error(error);

    res
      .status(500)
      .send({ error: 'An error occurred while getting default code' });
  }
}

export async function execute(req: AuthRequest, res: Response) {
  try {
    if (!req.params) {
      res.status(400).send({ error: 'No params.' });
      return;
    }

    if (!req.file) {
      res.status(400).send({ error: 'No files were uploaded.' });
      return;
    }

    const { language } = req.params as Params;
    const languageConfig = languages[language];
    const userId = `${req.context?.userId}`;

    await sandbox.run({
      ...languageConfig,
      userID: userId,
    });

    const output = await sandbox.getOutput(languageConfig.language, userId);

    res.send(JSON.stringify(output));
  } catch (error) {
    logger.error(error);
    res
      .status(500)
      .send({ error: 'An error occurred while running the container' });
  }
}
