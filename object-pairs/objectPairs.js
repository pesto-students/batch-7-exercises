function objectPairs(object) {
  var arrayOfArray = [];
  for (var key in object) {
    var value = object[key];
    arrayOfArray.push([key, value]);
  }
  return arrayOfArray;
}

export { objectPairs };
