
function animalSort(array) {
  if (array.length === 0) {
    return array;
  }
  array.sort((animalOne,animalTwo) => {
    if(animalOne.numberOfLegs < animalTwo.numberOfLegs) {
      return -1;
    }
    if (animalOne.numberOfLegs > animalTwo.numberOfLegs) {
      return 1;
    }
    if (animalOne.numberOfLegs === animalTwo.numberOfLegs && animalOne.name < animalTwo.name) {
      return -1;
    }
    return 1;
  });
  return array;
}

export {
  animalSort,
};
