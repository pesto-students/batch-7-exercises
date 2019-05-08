function hasSameNumberOfLegs(
  { numberOfLegs: firstNumberOfLegs },
  { numberOfLegs: secondNumberOfLegs },
) {
  return firstNumberOfLegs === secondNumberOfLegs;
}

function differenceOfNumberOfLegs(
  { numberOfLegs: firstNumberOfLegs },
  { numberOfLegs: secondNumberOfLegs },
) {
  return firstNumberOfLegs - secondNumberOfLegs;
}

function hasAlphabeticallySmallerName({ name: firstName }, { name: secondName }) {
  return firstName < secondName;
}

function animalSort(animals) {
  return animals.sort((animal, subsequentAnimal) => {
    if (hasSameNumberOfLegs(animal, subsequentAnimal)) {
      if (hasAlphabeticallySmallerName(animal, subsequentAnimal)) {
        return -1;
      }
      return 1;
    }
    return differenceOfNumberOfLegs(animal, subsequentAnimal);
  });
}

export { animalSort };
