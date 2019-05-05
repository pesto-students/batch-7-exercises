
function sumOfPerfectSquares(sumValue) {
 var sum = 0
 var length = 0
 var perfectSquareArray = []
  for(i = 1 ;i <= sumValue; i++){
    /*Checking if the number is a perfect Square*/
    if(Number.isInteger(Math.sqrt(i)) === true){
      sum += i
      perfectSquareArray.push(i)
    }
  }
  sum = 0
  length = 0
  console.log(perfectSquareArray)
  return minimumLength()
    function minimumLength() {
      var arrayTemp = perfectSquareArray
      if(perfectSquareArray.length !== 0) {
        var max = perfectSquareArray.reduce((a,b)=> {  
            return Math.max(a,b)
        })
        sum += max
        maxIndex = perfectSquareArray.indexOf(max)
        perfectSquareArray.splice(maxIndex,1)
        var difference = sumValue - sum
          if(arrayTemp.indexOf(difference) !== 0){
            length += 1
          }
        if(sum <= sumValue) {
            length ++
            return minimumLength()
        }else{
          return length
        }
      }else{
        
        return length
      }
    }
    
  

}

export {
  sumOfPerfectSquares,
};
