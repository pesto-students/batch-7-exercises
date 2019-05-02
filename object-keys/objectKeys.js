
function objectKeys(obj) {
  var arrayOfKeys = [];
  for (var attrname in obj) 
  { 
    arrayOfKeys.push(attrname);
  }
  return arrayOfKeys;
}

export {
  objectKeys,
};
