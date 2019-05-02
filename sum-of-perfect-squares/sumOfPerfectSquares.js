function sumOfPerfectSquares(number) {
  if (number == 0) {
    return 0;
  }
  if (number == 1) {
    return 1;
  }
  var perfectSquareCount = 0;
  var lastPerfectSquareroot = parseInt(Math.sqrt(number));
  var minimumPerfectSquareCount = Number.MAX_VALUE;
  for (var i = lastPerfectSquareroot; i >= 1; i--) {
    perfectSquareCount = 1 + sumOfPerfectSquares(number - Math.pow(i, 2));
    if (perfectSquareCount < minimumPerfectSquareCount) {
      minimumPerfectSquareCount = perfectSquareCount;
    }
  }
  return minimumPerfectSquareCount;
}

export { sumOfPerfectSquares };
