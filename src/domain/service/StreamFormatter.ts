import { Decorator } from "../model/Decorator";
import { GrammarObject } from "../model/GrammarObject";

export class StreamFormatter {
  public constructor(private readonly stream: GrammarObject[]) {}

  public toDecoratedString(): string {
    return Decorator.decorateString(this.toUndecoratedString());
  }

  public toUndecoratedString(): string {
    return this.stream
      .reduce((prev: string, current: GrammarObject) => `${prev} ${current.value}`, "")
      .trim();
  }
}
