import { Complement } from "../model/Complement";
import { Determiner } from "../model/Determiner";
import { GrammarObject } from "../model/GrammarObject";
import { PhraseFSM } from "../model/PhraseFSM";
import { AdjectiveRepository } from "../repository/AdjectiveRepository";
import { NounRepository } from "../repository/NounRepository";

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

  get value(): GrammarObject[] {
    return Array.from(this.stream); // provide a copy to maintain immutability
  }
}
