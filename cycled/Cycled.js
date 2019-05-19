class Cycled {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }

  current() {
    return this.array[this.index];
  }

  next() {
    if (this.index < this.array.length - 1) {
      this.index += 1;
      return this.array[this.index];
    }
    this.index = 0;
    return this.array[this.index];
  }

  previous() {
    if (this.index > 0) {
      this.index -= 1;
      return this.array[this.index];
    }
    this.index = this.array.length - 1;
    return this.array[this.index];
  }

  step(numberOfSteps) {
    this.index += numberOfSteps;
    return this.array[this.index];
  }
}

export { Cycled };
