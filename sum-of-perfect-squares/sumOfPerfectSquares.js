function findNearestSquare(number) {
  return Math.floor(Math.sqrt(number)) ** 2;
}

function sumOfPerfectSquares(...args) {
  let minRequiredSquares = Number.MAX_VALUE;
  const number = args[0];
  const nearestSquare = findNearestSquare(number);
  const maxPossibleValue = Math.sqrt(nearestSquare);

  for (let i = maxPossibleValue; i > 0; i -= 1) {
    // "i" iterates through every possible factors of number.
    let copyOfNumber = number;
    copyOfNumber -= i ** 2;

    let currentRequired = 1;
    while (copyOfNumber > 0) {
      copyOfNumber -= findNearestSquare(copyOfNumber);
      currentRequired += 1;
    }

    if (currentRequired < minRequiredSquares) {
      minRequiredSquares = currentRequired;
    }
  }
  return minRequiredSquares;
}

export {
  sumOfPerfectSquares,
};
