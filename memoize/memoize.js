function memoize(func) {
  const cache = {};
  return (...args) => {
    const index = args.toString();
    if (cache[index] === undefined) {
      cache[index] = func(...args);
    }
    return cache[index];
  };
}

export {
  memoize,
};
