function rangeIter(start, end) {

  };

  rangeIter[Symbol.iterator] = function() {
    const range = [];
    return {
      next: function() {
        if (start < end) {
          return { value: range.push([start += 1]), done: false };
        } else {
          return { done: true };
        }
      }
    };
  }



export { rangeIter };
