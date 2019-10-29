import { Request, Response, Router } from 'express';
import { ControllerBase } from './ControllerBase';
import { GrammarStream } from '../Domain/Service/GrammarStream';
import { StreamFormatter } from '../Domain/Service/StreamFormatter';

export class WordsController extends ControllerBase {
  public createRouter(): Router {
    this.router.get('/username/random', WordsController.getRandomGenUname);
    return this.router;
  }

  public static getRandomGenUname(req: Request, res: Response): Send<Response> {
    const stream = new GrammarStream();
    const streamFormatter = new StreamFormatter(stream.value);

    return res.json({
      username: streamFormatter.toDecoratedString(),
    });
  }
}
