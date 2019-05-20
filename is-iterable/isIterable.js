
function isIterable(obj) {
  return typeof obj[Symbol.iterator] === 'function';
}

export {
  isIterable,
};
