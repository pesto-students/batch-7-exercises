
function chunkArrayInGroups(inputArray,chopPoint) {
  let outputArray = [];
  let index = 0;
  while (index < inputArray.length) {
    outputArray.push(inputArray.slice(index,index + chopPoint));
    index = index + chopPoint;
  }
  return outputArray;
}

export {
  chunkArrayInGroups,
};
