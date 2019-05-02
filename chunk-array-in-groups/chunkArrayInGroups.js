
function chunkArrayInGroups(inputArray,arrayLength) {
  var inputArrayLength = inputArray.length
  for(i=0;i<inputArrayLength;i++){
      if( i < arrayLength){
          length +=1
      }
      else{
        var outputArray = inputArray.slice(i)
      }
  }
  
  inputArray.slice()

}

export {
  chunkArrayInGroups,
};
