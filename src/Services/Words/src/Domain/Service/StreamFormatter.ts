import { GrammarObject } from '../Model/GrammarObject';

export class StreamFormatter {
  public constructor(private readonly stream: GrammarObject[]) { }

  public toUndecoratedString(): string {
    return this.stream
      .reduce((prev: string, current: GrammarObject) => `${prev} ${current.value}`, '')
      .trim();
  }
}
