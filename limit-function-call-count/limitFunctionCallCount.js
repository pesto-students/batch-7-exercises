function limitFunctionCallCount(callback, callLimit) {
  let callCount = 0;
  return (...args) => {
    callCount += 1;
    if (callCount < callLimit) {
      return callback(...args);
    }
    return null;
  };
}

export { limitFunctionCallCount };
