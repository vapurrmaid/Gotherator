import * as express from 'express';
import { ApplicationConfiguration } from './Config/ApplicationConfiguration';
import { WordsController } from './Controllers/WordsController';

export class ExpressApplication {
  private app: express.Application;

  public constructor() {
    this.app = express();
    this.app.set('port', ApplicationConfiguration.port);
    this.app.use(new WordsController().createRouter());
  }

  public get port(): string {
    return this.app.get('port');
  }

  public start(): void {
    this.app.listen(this.port, (): void => {
      // eslint-disable-next-line no-console
      console.log(`SERVICE STARTED [PORT ${this.port}]`);
    });
  }
}
