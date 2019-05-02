
function chunkArrayInGroups(inputArray,arrayLength) {
  var inputArrayLength = inputArray.length
  var length
  var outputArray = []
  for(i=0;i<inputArrayLength;i++){
      if( i < arrayLength){
           length +=1;
      }
      else{
         outputArray.push(inputArray.slice(i))
      }
  }
}

export {
  chunkArrayInGroups,
};
