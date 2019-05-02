
function objectPairs(obj) {
  var masterArray = [];
  var keyValuePairArray  = [];
  for (var attrname in obj) 
  { 
    keyValuePairArray.push(attrname);
    keyValuePairArray.push(obj[attrname]);
    masterArray.push(keyValuePairArray);
    keyValuePairArray = [];
  }
  return masterArray;
}

export {
  objectPairs,
};
