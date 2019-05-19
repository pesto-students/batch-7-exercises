
function isIterable(parameter) {
  return (typeof parameter[Symbol.iterator] === 'function');
  }

export {
  isIterable,
};
