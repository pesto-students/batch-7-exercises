
function largeOfFour(masterArray) {
  var largestArray = []
  var largestValue = 0
  var array1 = [] = masterArray[0]
  var array2 = [] = masterArray[1]
  var array3 = [] = masterArray[2]
  var array4 = [] = masterArray[3]
  //finding the largest number in Array1
  array1.map((value)=>{
    if(value > largestValue){
      largestValue = value
    }
  })
  largestArray.push(largestValue)
   //finding the largest number in Array2
  largestValue = 0
  array2.map((value)=>{
    if(value > largestValue){
      largestValue = value
    }
  })
  largestArray.push(largestValue)
  //finding the largest number in Array3
  largestValue = 0
  array3.map((value)=>{
    if(value > largestValue){
      largestValue = value
    }
  })
  largestArray.push(largestValue)
  //finding the largest number in Array4
  largestValue = 0
  array4.map((value)=>{
    if(value > largestValue){
      largestValue = value
    }
  })
  largestArray.push(largestValue)
  return largestArray;
}

export {
  largeOfFour,
};
