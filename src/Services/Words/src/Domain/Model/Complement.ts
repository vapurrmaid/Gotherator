import { GrammarObject } from './GrammarObject';

export class Complement extends GrammarObject {
  private static readonly OF_DARKNESS = 'of darkness';

  private static readonly OF_THE_NIGHT = 'of the night';

  // TODO add more

  public constructor() {
    const options = [
      Complement.OF_DARKNESS,
      Complement.OF_THE_NIGHT,
    ];

    const randomInt = Math.floor(Math.random() * options.length); // TODO via Repository

    super(options[randomInt]);
  }
}
