const fibonacciIter = {
  [Symbol.iterator]: function() {
    {
      let num = 1;
      let prev = 0;
      let temp;
      const iterator = {
        next() {
          while (true) {
            temp = prev + num;
            prev = num;
            num = temp;
            return { value: temp, done: false };
          }
        }
      };
      return iterator;
    }
  }
};

export { fibonacciIter };
