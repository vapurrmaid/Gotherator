export class PhraseFSM {
  public readonly static STATE_START = 'START';

  public readonly static STATE_1_DETERMINER = '1_DETERMINER';

  public readonly static STATE_2_ADJECTIVE = '2_ADJECTIVE';

  public readonly static STATE_3_NOUN = '3_NOUN';

  public readonly static STATE_4_COMPLEMENT = '4_COMPLEMENT';

  public readonly static STATE_FINISH = 'FINISH';

  private state: string;

  public constructor() {
    this.state = PhraseFSM.STATE_START;
  }

  public next(): PhraseFSM {
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

  private static selectStateFrom(stateOpts: string[]): string {
    const randomInt = Math.floor(Math.random() * stateOpts.length);
    return stateOpts[randomInt];
  }

  public get currentState(): string {
    return this.state;
  }
}
