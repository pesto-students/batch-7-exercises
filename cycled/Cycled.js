class Cycled {
  constructor(_array) {
    this.array = _array;
    this.index = 0;
    this.isReversed = false;
  }

  set index(value) {
    if (value === -1) {
      this.index = this.array.length - 1;
    } else {
      this.index = (value % this.array.length);
    }
  }

  [Symbol.iterator]() {
    return this;
  }
  next() {
    if (this.isReversed) {
      this.index++;
      return this.array[this.index];
    }
    else {
      previous();
    }
  }
  current() {
    return this.array[this.index];
  }
  previous() {
    if (this.isReversed) {
      this.index--;
      return this.array[this.index];
    }
    else {
      next();
    }
  }
  reverse() {
    this.isReversed = !this.isReversed;
  }
}

export {
  Cycled,
};
