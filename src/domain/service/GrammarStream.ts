import { Complement } from "../model/Complement";
import { Determiner } from "../model/Determiner";
import { GrammarObject } from "../model/GrammarObject";
import { PhraseFSM } from "../model/PhraseFSM";
import { getOneAdjective } from "../repository/AdjectiveRepository";
import { getOneNoun } from "../repository/NounRepository";

export function generateGrammarStream(): GrammarObject[] {
  const stream: GrammarObject[] = [];
  const fsm = new PhraseFSM();

  do {
    const { currentState } = fsm.next();
    if (currentState === PhraseFSM.STATE_1_DETERMINER) {
      stream.push(new Determiner());
    } else if (currentState === PhraseFSM.STATE_2_ADJECTIVE) {
      stream.push(getOneAdjective());
    } else if (currentState === PhraseFSM.STATE_3_NOUN) {
      stream.push(getOneNoun());
    } else if (currentState === PhraseFSM.STATE_4_COMPLEMENT) {
      stream.push(new Complement());
    }
  } while (fsm.currentState !== PhraseFSM.STATE_FINISH);

  return stream;
}
