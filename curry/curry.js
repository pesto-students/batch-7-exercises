function curry(callbackFunction) {
  // get arguments length of callback function
  const cbArgsLength = callbackFunction.length;
  if (cbArgsLength === 0) return callbackFunction;

  return function curryFunction(...args) {
    if (args.length < cbArgsLength) {
      // If less arguments passed then pass null for those empty spots.
      return curryFunction.bind(null, ...args);
    }
    return callbackFunction(...args);
  };
}

export {
  curry,
};
