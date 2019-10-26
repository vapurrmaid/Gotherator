import { RepositoryBase } from './RepositoryBase';
import * as wordsJson from '../../../data/words.json';
import { Adjective } from '../Model/Adjective';

export class AdjectiveRepository implements RepositoryBase<Adjective> {
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
