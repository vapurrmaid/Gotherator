import { GrammarObject } from "./GrammarObject";

export class Noun implements GrammarObject {
  constructor(public readonly value: string) {}
}
