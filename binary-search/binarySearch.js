
function binarySearch(sortedArray, targetValue) {
    const midIndex = Math.floor(sortedArray.length / 2)
    if(sortedArray[midIndex] === targetValue) {
      return midIndex
    } else if(sortedArray[midIndex] > targetValue) {
      return binarySearch(sortedArray.splice(0,midIndex),targetValue) 
    } else if(sortedArray[midIndex] < targetValue) {
      return binarySearch(sortedArray.splice(midIndex,sortedArray.length),targetValue) 
    } else {
      return false
    }
}

export {
  binarySearch,
};
