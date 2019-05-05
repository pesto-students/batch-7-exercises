
function sumFibs(sumValue) {
  var fibonacci = []
  fibonacci[0] = 0
  fibonacci[1] = 1
  var sumOfOddFibonacci = 0
  for(let i=2; i < sumValue; i++) {
  
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i-2]
    if(fibonacci[i] % 2 != 0) {
      sumOfOddFibonacci += fibonacci[i]
    }
    if(fibonacci[i] > sumValue){
      return sumOfOddFibonacci + 1
    }
  }
}

export {
  sumFibs,
};
