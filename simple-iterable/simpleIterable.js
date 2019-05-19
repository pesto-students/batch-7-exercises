
function simpleIterable() {
  let count = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (count < 5) {
        count += 1;
        return { value: count, done: false };
      } else {
        return { done: true };
      }
    }
  }
}


export {
  simpleIterable,
};
