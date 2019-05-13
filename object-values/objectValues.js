function objectValues(object) {
  var objectValueArray = [];
  for (var key in object) {
    objectValueArray.push(object[key]);
  }
  return objectValueArray;
}

export { objectValues };
