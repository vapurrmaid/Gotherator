import { GrammarObject } from "./GrammarObject";

export class Determiner implements GrammarObject {
  public readonly value: string;

  // private static readonly A = 'a'; // TODO as a(n)

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

    const randomInt = Math.floor(Math.random() * options.length); // TODO via Repository

    this.value = options[randomInt];
  }
}
