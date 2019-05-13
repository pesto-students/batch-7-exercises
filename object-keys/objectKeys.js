function objectKeys(object) {
  var keyArray = [];
  for (var key in object) {
    keyArray.push(key);
  }
  return keyArray;
}

export { objectKeys };
