function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return Number.isInteger(sqrt);
}
function sumOfPerfectSquares(targetNum) {
  let num = targetNum;
  let total = 0;
  let count = 0;
  while (total < targetNum) {
    const perfectSq = isPerfectSquare(num);
    if (perfectSq) {
      while (total + num <= targetNum) {
        console.log(perfectSq, num, total);
        total += num;
        count += 1;
      }
    }
    num -= 1;
  }
  return count;
}

export { sumOfPerfectSquares };
