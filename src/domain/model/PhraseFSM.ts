type PhraseFSMState =
  | "START"
  | "1_DETERMINER"
  | "2_ADJECTIVE"
  | "3_NOUN"
  | "4_COMPLEMENT"
  | "FINISH";

export class PhraseFSM {
  static readonly STATE_START: PhraseFSMState = "START";
  static readonly STATE_1_DETERMINER: PhraseFSMState = "1_DETERMINER";
  static readonly STATE_2_ADJECTIVE: PhraseFSMState = "2_ADJECTIVE";
  static readonly STATE_3_NOUN: PhraseFSMState = "3_NOUN";
  static readonly STATE_4_COMPLEMENT: PhraseFSMState = "4_COMPLEMENT";
  static readonly STATE_FINISH: PhraseFSMState = "FINISH";

  private state: PhraseFSMState = PhraseFSM.STATE_START;

  next(): PhraseFSM {
    switch (this.state) {
      case PhraseFSM.STATE_START:
        this.state = PhraseFSM.selectStateFrom([
          PhraseFSM.STATE_1_DETERMINER,
          PhraseFSM.STATE_2_ADJECTIVE,
          PhraseFSM.STATE_3_NOUN,
        ]);
        break;

      case PhraseFSM.STATE_1_DETERMINER:
        this.state = PhraseFSM.selectStateFrom([
          PhraseFSM.STATE_2_ADJECTIVE,
          PhraseFSM.STATE_3_NOUN,
        ]);
        break;

      case PhraseFSM.STATE_2_ADJECTIVE:
        this.state = PhraseFSM.STATE_3_NOUN;
        break;

      case PhraseFSM.STATE_3_NOUN:
        this.state = PhraseFSM.selectStateFrom([
          PhraseFSM.STATE_4_COMPLEMENT,
          PhraseFSM.STATE_FINISH,
        ]);
        break;

      case PhraseFSM.STATE_4_COMPLEMENT:
      default:
        this.state = PhraseFSM.STATE_FINISH;
    }

    return this;
  }

  private static selectStateFrom(stateOpts: PhraseFSMState[]): PhraseFSMState {
    const randomInt = Math.floor(Math.random() * stateOpts.length);
    return stateOpts[randomInt];
  }

  get currentState(): string {
    return this.state;
  }
}
