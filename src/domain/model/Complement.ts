import { randNumber } from "../util/rng";
import { GrammarObject } from "./GrammarObject";

/**
 * Note: This currently violate the Entity vs Repository design by being both.
 * Other objects have to know to use a constructor on this object rather than
 * a Repository.
 */
export class Complement implements GrammarObject {
  readonly value: string;

  // TODO add more -> Repository
  private static readonly OF_DARKNESS = "of darkness";
  private static readonly OF_THE_NIGHT = "of the night";

  public constructor() {
    const options = [Complement.OF_DARKNESS, Complement.OF_THE_NIGHT];
    const randomInt = randNumber(options.length);
    this.value = options[randomInt];
  }
}
