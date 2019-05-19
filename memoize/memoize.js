const memoize = fun => {
  let cache = {};
  return function(...args) {
    let val = JSON.stringify(args);
    if (cache[val] != undefined) {
      return cache[val];
    } else {
      let result = fun(...args);
      cache[val] = result;
      return result;
    }
  };
};

export { memoize };
