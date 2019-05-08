
function isIterable(arg) {
  return typeof arg[Symbol.iterator] === 'function';
}

export {
  isIterable,
};
