
function sumEvenArgs(...args) {
  return args
    .filter(number => number % 2 === 0)
    .reduce((sum, number) => sum + number, 0);
}

export {
  sumEvenArgs,
};
