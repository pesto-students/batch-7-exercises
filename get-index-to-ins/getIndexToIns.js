
function getIndexToIns(arrayToBeSorted, numberToAdd) {
  if(arrayToBeSorted.indexOf(numberToAdd) === -1) {
    arrayToBeSorted.push(numberToAdd)
  }
  function toSort(a,b) {
    return a - b
  }
  var sortedArray = arrayToBeSorted.sort(toSort)
  return sortedArray.indexOf(numberToAdd)
}

export {
  getIndexToIns,
};
