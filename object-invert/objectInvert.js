function objectInvert(object) {
  var invertObject = {};
  for (var key in object) {
    var value = object[key];
    invertObject[value] = key;
  }
  return invertObject;
}

export { objectInvert };
