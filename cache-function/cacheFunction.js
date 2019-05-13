
function cacheFunction(callback) {
  var argumentHistory = [];
  if(!callback)
    return Function;
  return function(...args){
    var arrayFound = argumentHistory.find(
      array=> isEquivalent(array, args)
    );
    if(!arrayFound){
      argumentHistory.push(args);
      return callback(...args);
    }
    return null;
  };
}

function isEquivalent(firstArray, secondArray) {
  var firstArrayProperties = Object.getOwnPropertyNames(firstArray);
  var secondArrayProperties = Object.getOwnPropertyNames(secondArray);

  if (firstArrayProperties.length != secondArrayProperties.length) {
      return false;
  }

  for (var i = 0; i < firstArrayProperties.length; i++) {
      var propertyName = firstArrayProperties[i];
      if (firstArray[propertyName] !== secondArray[propertyName]) {
          return false;
      }
  }
  return true;
}


export {
  cacheFunction,
};
