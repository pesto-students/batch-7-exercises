
function curry(fn, ...initialArgs) {
  if (fn.length === initialArgs.length) {
    return fn(...initialArgs);
  }
  return (...argsOfSecondFn) => {
    return curry(fn, ...initialArgs, ...argsOfSecondFn);
  };
}

export {
  curry, 
};
