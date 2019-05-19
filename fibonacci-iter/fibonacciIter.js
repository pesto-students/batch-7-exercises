
const fibonacciIter = {
  [Symbol.iterator]: () => {
    let previousValue = 0;
    let currentValue = 1;
    return {
      next() {
        const nextValue = previousValue + currentValue;
        previousValue = currentValue;
        currentValue = nextValue;
        return { value: nextValue, done: false};
      }
    };
  }
}
export {
  fibonacciIter,
};
