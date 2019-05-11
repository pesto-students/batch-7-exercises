
function sumFibs(sumValue) {
  var fibonacci = []
  fibonacci[0] = 1
  fibonacci[1] = 1
  var sumOfFibonacci = 2
  var sumOfOddFibonacci = 0
  for(let i = 2; sumOfFibonacci < sumValue; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i-2]
    sumOfFibonacci += fibonacci[i]
    if(fibonacci[i] % 2 != 0) {
      sumOfOddFibonacci += fibonacci[i]
    }
  }
  return sumOfFibonacci + 2
}
export {
  sumFibs,
};
