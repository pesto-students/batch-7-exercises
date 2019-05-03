function curry(callbackFunc) {
  var callBackArgsLength = callbackFunc.length;
  if (callBackArgsLength == 0) {
    return callbackFunc;
  }
  var curryFunc = function(...args) {
    if (args.length >= callBackArgsLength) {
      return callbackFunc(...args);
    } else {
      return curryFunc.bind(null, ...args);
    }
  };
  return curryFunc;
}

export { curry };
