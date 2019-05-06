
function chunkArrayInGroups(inputArray,arrayLength) {
 
  var outputArray = []
  for(let i = 0;i < inputArray.length;i += arrayLength){
      outputArray.push(inputArray.slice(i, (i + arrayLength)))
  }
  return outputArray
}

export {
  chunkArrayInGroups,
};
