
function fibonacciIter(...args) {
  const iterable = {}
  iterable[Symbol.iterator] = function(){
    let i = 1
    const iterator = {
      next() {
          while(!(i<0)) {
            let previousValue = i
            return { value: i + previousValue, done: false}
          }
      }
    }
  }
}

export {
  fibonacciIter,
};
