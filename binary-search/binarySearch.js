
function binarySearch(array, numberToSearch) {
  if (array.length === 0) {
    return -1;
  }
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let middleOfArray;
  let valueFound = false;
  while (lowerBound <= upperBound) {
    middleOfArray = (lowerBound + upperBound) / 2;
    middleOfArray = Math.floor(middleOfArray);
      if (array[middleOfArray] < numberToSearch) {
      lowerBound = middleOfArray + 1;
    }
    else if (array[middleOfArray] > numberToSearch) {
      upperBound = middleOfArray - 1;
    }
    else {
      valueFound = true;
      return middleOfArray;
     
    }
  }
  if (valueFound === false) {
    return -1;
  }
}

export {
  binarySearch,
};
