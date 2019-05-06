
function objectDefaults(object1,object2) {
  var defaultsObject = Object.assign(object2,object1)
  return defaultsObject
}

export {
  objectDefaults,
};
