const fibonacciIter = {
  [Symbol.iterator]() {
    let a = 0;
    let b = 1;
    return {
      next() {
        const nextValue = a + b;
        a = b;
        b = nextValue;
        return { value: nextValue, done: false };
      }
    }
  }
};

export { fibonacciIter };
