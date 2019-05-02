
function objectPairs(object) {
  let objectPairArray = [];
  for (let key in object) {
    let pairArray = [];
    pairArray.push(key,object[key]);
    objectPairArray.push(pairArray);
  }
  return objectPairArray;
}

export {
  objectPairs,
};
