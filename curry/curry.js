function curry(fn, ...args) {
  if ((fn.length === args.length)) {
    return fn(...args);
  }
  return (...rest) => curry(fn, ...args, ...rest);
}

export { curry };
