import wordsJson from "../../data/words.json";
import { Adjective } from "../model/Adjective";

export class AdjectiveRepository {
  private static readonly adjectives: string[] = AdjectiveRepository.parseNouns();

  private static parseNouns(): string[] {
    const { adjectives } = wordsJson;
    return Object.keys(adjectives);
  }

  public static getOne(): Adjective {
    const rand = Math.floor(Math.random() * this.adjectives.length);
    return new Adjective(this.adjectives[rand]);
  }
}
