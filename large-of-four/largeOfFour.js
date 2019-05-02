
function largeOfFour(array1,array2,array3,array4) {
  var largestArray = []
  var largestValue = 0
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
