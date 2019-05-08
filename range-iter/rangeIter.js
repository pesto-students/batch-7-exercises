
function rangeIter(startIndex, endIndex) {
     const iterable = {}
     iterable[Symbol.iterator] = function() {
      const iterator = {
        next(){
          let rangeArray = []
          if(startIndex < endIndex) {
            rangeArray.push(startIndex)
            result = {value : startIndex,done : false}
            startIndex += startIndex
            return rangeArray
          }
          else {
            return result = {done: true}
          }
        }
      }
     return iterator
    }
}

export {
  rangeIter,
};
