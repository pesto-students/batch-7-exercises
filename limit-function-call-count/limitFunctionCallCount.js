function limitFunctionCallCount(callback, maxInvokeCount) {
  return function(...args) {
    if (maxInvokeCount <= 0) {
      return null;
    }
    maxInvokeCount--;
    return callback(...args);
  };
}

export { limitFunctionCallCount };
