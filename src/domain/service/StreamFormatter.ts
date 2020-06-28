import { Decorator } from "../model/Decorator";
import { GrammarObject } from "../model/GrammarObject";

export function toDecoratedString(stream: GrammarObject[]): string {
  return Decorator.decorateString(toUndecoratedString(stream));
}

export function toUndecoratedString(stream: GrammarObject[]): string {
  return stream
    .reduce((prev: string, current: GrammarObject) => `${prev} ${current.value}`, "")
    .trim();
}
