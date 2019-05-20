
function animalSort(array) {
  if (array.length === 0) {
    return array;
  }
  array.sort((animalOne, animalTwo) => {
    const diffInNumberOfLegs = animalOne.numberOfLegs - animalTwo.numberOfLegs;
    if (diffInNumberOfLegs < 0) {
      return -1;
    }
    if (diffInNumberOfLegs > 0) {
      return 1;
    }
    if (diffInNumberOfLegs === 0 && animalOne.name < animalTwo.name) {
      return -1;
    }
    return 1;
  });
  return array;
}

export {
  animalSort,
};
