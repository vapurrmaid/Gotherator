export class Decorator {
  private static readonly startDecorators: string[] = [
    "~",
    "~~",
    "^",
    "~*",
    "_",
    "__",
    "==|",
    "+",
    "++",
    "+++",
  ];

  static decorateString(undecoratedString: string): string {
    const START_STRING = 1;
    const END_STRING = 1;
    const END_NUMBER = 2;

    const decisionMatrix = [Math.floor(Math.random() * 2), Math.floor(Math.random() * 3)];

    if (decisionMatrix[0] === START_STRING) {
      const randDecorator = Decorator.getDecorator();

      // <DEC> string <DEC>
      if (decisionMatrix[1] === END_STRING || decisionMatrix[1] === END_NUMBER) {
        return `${randDecorator}${undecoratedString}${randDecorator.split("").reverse().join("")}`;
      }

      // <DEC> string
      return `${randDecorator}${undecoratedString}`;
    }

    // string <DEC>
    if (decisionMatrix[1] === END_STRING) {
      return `${undecoratedString}${Decorator.getDecorator().split("").reverse().join("")}`;
    }

    // string <NUM>
    if (decisionMatrix[1] === END_NUMBER) {
      return `${undecoratedString}${Math.floor(Math.random() * 1000)}`;
    }

    // plain string
    return undecoratedString;
  }

  private static getDecorator(): string {
    return this.startDecorators[Math.floor(Math.random() * Decorator.startDecorators.length)];
  }
}
