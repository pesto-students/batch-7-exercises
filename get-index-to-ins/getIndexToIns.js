
function getIndexToIns(array , value) {
  array.sort((a,b) => (a-b));
  let indexToInsert;
  debugger;
  if (value <= array[0]) {
    indexToInsert = 0
  } else if (value >= array[array.length -1]) {
    indexToInsert = array.length;
  } else {
    for(let i=1; i<=array.length - 1; i++) {
      let isEqualToPrevious = value == array[i-1];
      let isGreaterThanPrevious = value > array[i-1];
      let islessThanCurrentElement = value < array[i];
      let isGreaterToCurrentElement = value > array[i];
      if (isEqualToPrevious) {
        indexToInsert = i - 1;
      }
  ;    if (isGreaterThanPrevious && islessThanCurrentElement) {
        indexToInsert = i;
      }
    }
  } 
  return indexToInsert;
}

export {
  getIndexToIns,
};
