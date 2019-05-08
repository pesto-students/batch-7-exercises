function animalSort(animals) {
  if (animals.length === 0) return [];

  return animals
    .sort((animal1, animal2) => animal1.name.localeCompare(animal2.name))
    .sort((animal1, animal2) => animal1.numberOfLegs - animal2.numberOfLegs);
}

export { animalSort };
