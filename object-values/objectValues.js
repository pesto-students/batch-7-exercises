
function objectValues(object) {
  let objectValuesArray = []
  for (let key in object) {
    objectValuesArray.push(object[key]);
  }
  return objectValuesArray;
}

export {
  objectValues,
};
