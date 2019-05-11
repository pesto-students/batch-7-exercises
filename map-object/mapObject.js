
function mapObject(inputObject,inputFunction) {

  for( var key in inputObject) {
    inputObject[key] = inputFunction(inputObject[key])
  }
  return inputObject
 }
 

export {
  mapObject,
};
