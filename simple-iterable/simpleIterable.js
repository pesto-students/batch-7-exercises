const iteratorObj = {
  [Symbol.iterator]() {
    let count = 0;
    const iterator = {
      next() {
        count++;
        if (count < 6) {
          return { value: count, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
    return iterator;
  }
};

function simpleIterable() {
  return iteratorObj;
}

export { simpleIterable };
