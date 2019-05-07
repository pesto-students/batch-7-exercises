class Cycled {
  constructor(_array) {
    this.array = _array;
    this._index = 0;
    this.isReversed = false;
  }

  set index(value) {
    if (value === -1) {
      this._index = this.array.length - 1;
    } else {
      this._index = (value % this.array.length);
    }
  }

  get index() {
    return this._index;
  }

  [Symbol.iterator]() {
    return this;
  }
  next() {
    if (!this.isReversed) {
      return this._next();
    }
    else {
      return this._previous();
    }
  }
  current() {
    return this.array[this.index];
  }
  previous() {
    if (!this.isReversed) {
      return this._previous();
    }
    else {
      return this._next();
    }
  }
  reversed() {
    this.isReversed = !this.isReversed;
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
}

export {
  Cycled,
};
