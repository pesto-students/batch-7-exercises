
function findElement(array,inputFunction) {
  var filteredArray = array.filter(inputFunction)
  return filteredArray[0]
}

export {
  findElement,
};
