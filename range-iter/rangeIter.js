
function rangeIter(rangeVal,rangeVal2) {
  [Symbol.iterator]=function() {
    this.current = this.from;
    return this;
  },

  next() =function() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
}

export {
  rangeIter,
};
