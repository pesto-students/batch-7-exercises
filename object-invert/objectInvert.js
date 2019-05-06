
function objectInvert(obj) {
  var invertedObject = {}
  var temp = {}
  temp = Object.values(obj)
  Object.values(obj) = Object.keys(obj)
  Object.keys(obj) = temp
  for(i = 0;i <= obj.length;i++){
      invertedObject{Object.keys(obj) : Object.values(obj)}
  }
  return invertedObject
  }
}

export {
  objectInvert,
};
