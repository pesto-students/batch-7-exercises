function rangeIter(from, to) {
  const isNumber = n => typeof n === "number";
  if (!isNumber(from) || !isNumber(to)) {
    throw new TypeError("Enter valid number");
  }
  let currIndex = from;
  return {
    [Symbol.iterator]: function() {
      currIndex = from;
      return this;
    },
    next() {
      if (currIndex <= to) {
        let val = { done: false, value: currIndex };
        currIndex++;
        return val;
      } else {
        return { done: true };
      }
    }
  };
}

export { rangeIter };
