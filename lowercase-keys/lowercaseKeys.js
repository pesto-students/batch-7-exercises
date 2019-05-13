
function lowercaseKeys(object) {
  var output = {}
  for (var key in object) {
    output[key.toLowerCase()] = object[key];
  }
  return output;
}

export {
  lowercaseKeys,
};
