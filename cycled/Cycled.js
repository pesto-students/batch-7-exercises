class Cycled {
  constructor(_array) {
    this.array = _array;
    this._index = 0;
    this.isReversed = false;
    this.array[Symbol.iterator] = () => {
      const that = this;
      return Object.create({
        next() {
          return { value: that.next(), done: false };
        },
      });
    };
  }

  set index(value) {
    if (value < 0) {
      value = (-1 * value) % this.array.length;
      if (value === 0) {
        this._index = 0;
      } else {
        this._index = this.array.length - value;
      }
    } else {
      this._index = value % this.array.length;
    }
  }

  get index() {
    return this._index;
  }

  next() {
    if (!this.isReversed) {
      return this._next();
    }
    return this._previous();
  }

  current() {
    return this.array[this.index];
  }

  previous() {
    if (!this.isReversed) {
      return this._previous();
    }
    return this._next();
  }

  reversed() {
    this.isReversed = !this.isReversed;

    return this.array[Symbol.iterator]();
  }

  indexOf(value) {
    return this.array.indexOf(value);
  }

  _next() {
    this.index++;
    return this.array[this.index];
  }

  _previous() {
    this.index--;
    return this.array[this.index];
  }

  step(moveBy) {
    this.index += moveBy;
    return this.array[this.index];
  }
}

export { Cycled };
