function rangeIter(start, end) {
  const isNotNumber = n => typeof n === 'number';
  
  if (!isNotNumber(start) || !isNotNumber(end)) {
    throw TypeError('Not a Number');
  }
  if (start > end) {
    return [];
  }
  let initial = start;
  return {
    [Symbol.iterator]() {
      initial = start;
      return this;
    },
    next() {
      if (initial <= end) {
        const nextValue = {value : initial, done : false}
        initial += 1;
        return nextValue;
      } else {
        return { done: true };
      }
    }
  };
}

export { rangeIter };
