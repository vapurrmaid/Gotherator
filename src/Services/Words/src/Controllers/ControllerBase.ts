import { Response, Router } from 'express';

/**
 * Abstract base for REST Controllers
 */
export abstract class ControllerBase {
  protected readonly router = Router();

  /**
   * Returns this controller as an express.Router instance.
   *
   * @example
   *  class MyController implements ControllerBase { ... }
   *  const app = express();
   *  app.use(new MyController().createRouter());
   *
   * @return Router
   */
  public abstract createRouter(): Router;

  /**
   * Issues a response indicating that the request was malformed.
   *
   * @param res Response
   */
  public static BadRequest(res: Response): void {
    res.status(400).send();
  }

  /**
   * Issues a response indicating that the requested resource was not located.
   *
   * @param res Response
   */
  public static NotFound(res: Response): void {
    res.status(404).send();
  }
}
