
function objectInvert(obj) {
  var invertObj = {};
  for (var attrname in obj) 
  { 
    invertObj[obj[attrname]] = attrname;
  }
  return invertObj;
}

export {
  objectInvert,
};
