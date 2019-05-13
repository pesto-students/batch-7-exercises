function chunkArrayInGroups(array, subArrayLen) {
  var arrayLength = array.length;
  var arrayOfSubArray = [];
  var numberOfSubArray = arrayLength / subArrayLen;
  for (var i = 0; i < numberOfSubArray; i++) {
    arrayOfSubArray.push(array.splice(0, subArrayLen));
  }
  return arrayOfSubArray;
}

export { chunkArrayInGroups };
