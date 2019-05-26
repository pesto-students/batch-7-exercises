function memoize(fn) {
  const cache = new Map();
  if (fn.length === 1) {
    return (args) => {
      if (cache.has(args)) {
        return cache.get(args);
      }
      const newValue = fn(args);
      cache.set(args, newValue);
      return newValue;
    };
  }

  return (...args) => {
    const keyArr = [...args];
    const keysFromCache = cache.keys();
    const keyFound = keysFromCache.reduce((acc, arr) => {
      let found = true;
      for (let i = 0; i < fn.length; i += 1) {
        if (arr[i] !== keyArr[i]) {
          found = false;
        }
      }
      if (found) {
        return cache.get(arr);
      }
    }, false);

    if (keyFound === false) {
      const newValue = fn(...args);
      cache.set(keyArr, newValue);
      return newValue;
    }
    return keyFound;
  };
}

export { memoize };
