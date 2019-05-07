
function sortByName(a,b){
  var animalA = a.name.toUpperCase();
  var animalB = b.name.toUpperCase();
  if (animalA < animalB) {
    return -1;
  }
  if (animalA < animalB) {
    return 1;
  } 
  return 0; 
}
function animalSort(animals) {
  return animals.sort((a, b) => a.numberOfLegs - b.numberOfLegs && sortByName(a,b))
}

export {
  animalSort,
};
