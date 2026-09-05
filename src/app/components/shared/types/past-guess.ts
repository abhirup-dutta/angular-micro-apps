export class PastGuess {
  word: string = '';
  greenIndices: number[] = [];
  yellowIndices: number[] = [];
  grayIndices: number[] = [];

  constructor(word: string) {
    this.word = word;
  }

  displayStr(): string {
    let displayStr: string = '';
    for (let i = 0; i < 5; i++) {
      displayStr += this.word.charAt(i).toUpperCase();
      if (this.greenIndices.includes(i)) displayStr += 'g';
      if (this.yellowIndices.includes(i)) displayStr += 'y';
      displayStr += ' ';
    }
    return displayStr;
  }

  matchWith(answer: string) {
    for (let i = 0; i < 5; i++) {
      if (this.word.charAt(i).toUpperCase() === answer.charAt(i).toUpperCase()) {
        this.greenIndices.push(i);
      } else if (answer.toUpperCase().includes(this.word.charAt(i).toUpperCase())) {
       this.yellowIndices.push(i);
      } else {
        this.grayIndices.push(i);
      }
    }
  }
}
