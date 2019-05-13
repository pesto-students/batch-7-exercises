
function lowercaseKeys(obj) {
  var lowerCaseObject = {}
  for(var key in obj) {
    lowerCaseObject[key.toLowerCase()] = obj[key]
  }
  return lowerCaseObject
}

export {
  lowercaseKeys,
};
