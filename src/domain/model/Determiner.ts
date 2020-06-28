import { randNumber } from "../util/rng";
import { GrammarObject } from "./GrammarObject";

/**
 * Note: This currently violate the Entity vs Repository design by being both.
 * Other objects have to know to use a constructor on this object rather than
 * a Repository.
 */
export class Determiner implements GrammarObject {
  readonly value: string;

  // private static readonly A = 'a'; // TODO as a(n)

  // TODO - Repository
  private static readonly MY = "my";
  private static readonly ONE = "one";
  private static readonly SOME = "some";
  private static readonly THAT = "that";
  private static readonly THE = "the";
  private static readonly THIS = "this";
  private static readonly YOUR = "your";

  public constructor() {
    const options = [
      // Determiner.A, // TODO as a(n)
      Determiner.MY,
      Determiner.ONE,
      Determiner.SOME,
      Determiner.THAT,
      Determiner.THE,
      Determiner.THIS,
      Determiner.YOUR,
    ];
    const randomInt = randNumber(options.length);
    this.value = options[randomInt];
  }
}
