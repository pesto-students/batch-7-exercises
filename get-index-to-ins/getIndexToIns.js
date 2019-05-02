function getIndexToIns(numericArray, numberToInsert) {
  var numericSortedArray = numericArray.sort(function(
    firstNumber,
    secondNumber
  ) {
    return firstNumber - secondNumber;
  });
  for (var i = 0; i < numericSortedArray.length; i++) {
    if (numericSortedArray[i] >= numberToInsert) {
      return i;
    }
  }
  return numericSortedArray.length;
}

export { getIndexToIns };
