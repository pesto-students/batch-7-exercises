
function objectValues(obj) {
  var arrayOfValues = [];
  for (var attrname in obj) 
  { 
    arrayOfValues.push(obj[attrname]);
  }
  return arrayOfValues;
}

export {
  objectValues,
};
