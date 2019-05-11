
function sumEvenArgs(...args) {
  const isEven = n => (n % 2 === 0);
  return args.reduce((sum, element) => (sum + (isEven(element) ? element : 0)), 0);
}

export {
  sumEvenArgs,
};
