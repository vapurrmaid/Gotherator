import wordsJson from "../../data/words.json";
import { Noun } from "../model/Noun";

export class NounRepository {
  private static readonly nouns: string[] = NounRepository.parseNouns();

  private static parseNouns(): string[] {
    const { nouns } = wordsJson;
    return Object.keys(nouns);
  }

  public static getOne(): Noun {
    const rand = Math.floor(Math.random() * this.nouns.length);
    return new Noun(this.nouns[rand]);
  }
}
