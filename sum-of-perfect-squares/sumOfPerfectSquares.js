
function sumOfPerfectSquares(sumValue) {
  const addedSum
  for(i=1;i<=sumValue;i++){
    if(Number.isInteger(Math.sqrt(i))== true){
        addedSum = addedSum + 1
        
    }
  }
}

export {
  sumOfPerfectSquares,
};
