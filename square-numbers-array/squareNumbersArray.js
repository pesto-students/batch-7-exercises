class ArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArgumentError';
  }
}

function squareNumbersArray(...args) {
  const isContainsNonNumericalArgs = args.filter(arg => Number.isNaN(parseInt(arg, 10)));
  if (isContainsNonNumericalArgs.length) {
    throw new ArgumentError('My custom error');
  }
  return args.map(num => num ** 2);
}

export { squareNumbersArray };
