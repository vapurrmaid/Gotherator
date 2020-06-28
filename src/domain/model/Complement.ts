import { GrammarObject } from "./GrammarObject";

export class Complement implements GrammarObject {
  public readonly value: string;

  private static readonly OF_DARKNESS = "of darkness";

  private static readonly OF_THE_NIGHT = "of the night";

  // TODO add more

  public constructor() {
    const options = [Complement.OF_DARKNESS, Complement.OF_THE_NIGHT];

    const randomInt = Math.floor(Math.random() * options.length); // TODO via Repository

    this.value = options[randomInt];
  }
}
