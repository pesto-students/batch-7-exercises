

function rangeIter(startValue, endValue) {
  if (startValue > endValue) {
    return [];
  }
  else if (startValue === undefined || endValue === undefined) {
    throw new TypeError('undefined is not a number');
  }
  else if (!(typeof startValue === 'number') || !(typeof endValue === 'number')) {
    throw new TypeError('a is not a number');
  }
  else {
    const obj = {
      [Symbol.iterator]() {
          return {
            next() {
              if ( startValue < endValue) {
                startValue ++;
              return { value: startValue, done: false};
            }
            else {
              return { value: undefined, done: true};
            }
          }
        }
      }
    }
    return obj;
}
}

export {
  rangeIter,
};
