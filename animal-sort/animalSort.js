
function animalSort(animals) {
  animals.sort((animal1, animal2) => {
    const sortValue = animal1.numberOfLegs - animal2.numberOfLegs;
    if (sortValue === 0) {
      if (animal1.name > animal2.name) {
        return 1;
      }
      if (animal1.name < animal2.name) {
        return -1;
      }
      return 0;
    }
    return sortValue;
  });
  return animals;
}

export {
  animalSort,
};
