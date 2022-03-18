export class BinaryAlgorithm {
  private array: number[] = [];
  private startIndex: number = 0;
  private endIndex: number = 0;
  public equalNumberFound: number = 0;

  constructor(
    readonly maxNumberInArray: number = 19,
    readonly equalNumberInArray: number = 6,
  ) {
    if (maxNumberInArray <= 0) {
      throw new Error("Invalid maxNumberInArray");
    }

    if (equalNumberInArray < 0) {
      throw new Error('Invalid equalNumberInArray');
    }

    this.generateSequentialArray();
    this.endIndex = this.array.length;
    this.findEqualElement();
  }

  public findEqualElement(): void {
    const currentArray = this.array.slice(this.startIndex, this.endIndex);

    if (currentArray.length === 1) {
      this.equalNumberFound = currentArray[0];
      return;
    }

    const middle = this.middleIndexArray(currentArray) + this.startIndex;

    if (middle !== this.array[middle]) {
      this.endIndex = middle;
      return this.findEqualElement();
    }

    if (this.endIndex !== this.array[this.endIndex]) {
      this.startIndex = middle;
      return this.findEqualElement();
    }
  }

  public generateSequentialArray() {
    if (this.array.length) {
      return;
    }
    for(let i = 0; i <= this.maxNumberInArray; i++) {
      this.array.push(i);
      if (i === this.equalNumberInArray) {
        this.array.push(i);
      }
    }
  }

  public middleIndexArray(array: number[]): number {
    return Math.ceil(array.length / 2);
  }

  get getArray(): number[] {
    return this.array;
  }
}
