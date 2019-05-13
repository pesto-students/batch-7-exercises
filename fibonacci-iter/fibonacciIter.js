const fibonacciIter = {
  [Symbol.iterator]: () => {
    let previousFact = 0;
    let currentFact = 1;
    return {
      next() {
        const fact = previousFact + currentFact;
        previousFact = currentFact;
        currentFact = fact;
        return { value: fact, done: false };
      },
    };
  },
};

export { fibonacciIter };
