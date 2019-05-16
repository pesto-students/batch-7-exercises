function nthArg(n) {
  return function curried(...args) {
    if (n < 0) {
      let pos = args.length + n;
      return args[pos];
    }
    return args[n];
  };
}

export { nthArg };
