
function objectValues(obj) {
  var arr = [];
  let arrayOfValues = [];
  for( let keys in obj) {
    arr = obj[keys];
    arrayOfValues.push(arr);
    arr = [];
  }
  return arrayOfValues;
}

export {
  objectValues,
};
