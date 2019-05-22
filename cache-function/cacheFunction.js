function cacheFunction(innerFunction) {
  if (innerFunction === undefined) return Function;

  const cache = {};

  return (arg) => {
    if (!(arg in cache)) {
      const result = innerFunction(arg);
      cache[arg] = result;
    }
    return cache[arg];
  };
}

export { cacheFunction };
