import cors from 'cors';
import express, { Application, Express } from 'express';
import helmet from 'helmet';
import http from 'http';

import SandBox from '@src/components/sandbox';
import * as database from '@src/database';
import { router as routerAuth } from '@src/routes/auth';
import { router as routerCode } from '@src/routes/code';

import logger from './logger';

export class Server {
  private server?: http.Server;
  private app: Express;
  private sandbox: SandBox;

  constructor(private port = 3333) {
    this.app = express();
    this.server = http.createServer(this.app);
    this.sandbox = new SandBox();
  }

  public async init(): Promise<void> {
    await this.setupSandbox();

    this.setupExpress();
    this.setupRoutes();

    await this.databaseSetup();
  }

  private setupExpress(): void {
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(
      cors({
        origin: '*',
      }),
    );
  }

  private async setupSandbox() {
    await this.sandbox.setup();
  }

  private setupRoutes() {
    this.app.use('/code', routerCode);
    this.app.use('/auth', routerAuth);
  }

  public getApp(): Application {
    return this.app;
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }

  public async close(): Promise<void> {
    await database.close();
    if (this.server) {
      await new Promise((resolve, reject) => {
        this.server?.close(err => {
          if (err) {
            return reject(err);
          }
          resolve(true);
        });
      });
    }
  }

  public start(): void {
    this.server?.listen(this.port, () => {
      logger.info('Server listening on port: ' + this.port);
    });
  }
}
