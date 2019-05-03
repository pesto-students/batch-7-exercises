function limitFunctionCallCount(Fn, callLimit) {
  let timesCalledFn = 0;
  return (...args) => {
    if (timesCalledFn < callLimit) {
      timesCalledFn += 1;
      return Fn.apply(this, args);
    }
    return null;
  };
}

export { limitFunctionCallCount };
