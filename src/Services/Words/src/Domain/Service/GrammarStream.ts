import { AdjectiveRepository } from '../Repository/AdjectiveRepository';
import { Complement } from '../Model/Complement';
import { Determiner } from '../Model/Determiner';
import { GrammarObject } from '../Model/GrammarObject';
import { NounRepository } from '../Repository/NounRepository';
import { PhraseFSM } from '../Model/PhraseFSM';

export class GrammarStream {
  private stream: GrammarObject[];

  public constructor() {
    this.stream = [];

    const fsm = new PhraseFSM();

    do {
      const { currentState } = fsm.next();
      if (currentState === PhraseFSM.STATE_1_DETERMINER) {
        this.stream.push(new Determiner());
      } else if (currentState === PhraseFSM.STATE_2_ADJECTIVE) {
        this.stream.push(AdjectiveRepository.getOne());
      } else if (currentState === PhraseFSM.STATE_3_NOUN) {
        this.stream.push(NounRepository.getOne());
      } else if (currentState === PhraseFSM.STATE_4_COMPLEMENT) {
        this.stream.push(new Complement());
      }
    } while (fsm.currentState !== PhraseFSM.STATE_FINISH);
  }

  public get value(): GrammarObject {
    return Array.from(this.stream); // provide a copy to maintain immutability
  }
}
