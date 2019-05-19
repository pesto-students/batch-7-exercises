
function isIterable(args) {
  return (typeof args[Symbol.iterator] === 'function');
}

export {
  isIterable,
};
