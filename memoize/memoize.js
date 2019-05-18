
function memoize(fn) {
  let cache = {};
  return function(...args) {
    const stringifiedArgs = args.toString();
    if (cache.hasOwnProperty(stringifiedArgs)) {
      return cache[stringifiedArgs];
    }
    const functionOutput = fn(...args);
    cache[stringifiedArgs] = functionOutput;
    return functionOutput;
  }
}

export {
  memoize,
};
