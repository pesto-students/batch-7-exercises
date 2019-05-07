
function sortByName(a,b){
  var A = a.name.toUpperCase();
  var B = b.name.toUpperCase();
  if (A < B) {
    return -1;
  }
  if (A < B) {
    return 1;
  } 
  return 0; 
}
function animalSort(animals) {
  return animals.sort((a, b) => a.numberOfLegs - b.numberOfLegs)
}

export {
  animalSort,
};
