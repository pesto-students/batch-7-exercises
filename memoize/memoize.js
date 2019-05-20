
function memoize(args,unused) {
  let cache = {};
  return (el) => {
    if (!cache[el]) {
      let value = args(el);
      cache[el] = value;
      return value;
    }
    else {
      return cache[el];
    }
  }
}

export {
  memoize,
};
