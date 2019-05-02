
function dropElements(inputArray,predicate) {
  let outputArray=[];
  for (let i =0; i< inputArray.length ; i++) {
    if (predicate(inputArray[i])) {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}

export {
  dropElements,
};
