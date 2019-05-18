
function squareNumbersArray(...args) {
  const isNotNumber = num => (typeof num !== 'number');
  const isString = num => (typeof num === 'string')
  if (args.some(isNotNumber)) {
    throw new Error('My custom error');
  }
  return args.map((element) => element * element);
}

export {
  squareNumbersArray,
};
