
function memoize(fn) {
  let cache = {};
  return function(...num) {
    if (num in cache) {
      return cache[num];
    }
    return cache[num] = fn.apply(this,num);
  }
}

export {
  memoize,
};
