function isPromise(promise) {
  if (promise instanceof Promise) {
    return true;
  }
  return false;
}

export { isPromise };
