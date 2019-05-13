function lowercaseKeys(object) {
  var lowercaseKeyObject = {};
  for (var key in object) {
    lowercaseKeyObject[key.toLowerCase()] = object[key];
  }
  return lowercaseKeyObject;
}

export { lowercaseKeys };
