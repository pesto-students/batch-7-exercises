function memoize(callbackFunc) {
  var cache = [];
  var callbackArgsLength = callbackFunc.length;

  return function(...args) {
    var hashKey = args.join("-");
    if (cache[hashKey]) {
      return cache[hashKey];
    }
    var callbackResult = callbackFunc(...args);
    cache[hashKey] = callbackResult;
    return callbackResult;
  };
}

export { memoize };
