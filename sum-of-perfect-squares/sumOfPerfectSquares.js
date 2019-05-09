
function sumOfPerfectSquares(n) {
  var perfectSquares = 0;
  var countPerfectSquares = 0;
  while(n!=0)
  {
    perfectSquares = Math.pow(Math.floor(Math.sqrt(n)),2);
    n =  n - perfectSquares;
    countPerfectSquares++;
  }
  return countPerfectSquares;
}

export {
  sumOfPerfectSquares,
};
