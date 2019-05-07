
function animalSort(animalArray) {
  const sortedAnimalArray = animalArray.sort((a,b)=> {
    //if value of a-b is -ve, a is sorted left to b,if +ve, a is sorted right to b
     a.numberOfLegs - b.numberOfLegs
  })
  return sortedAnimalArray
}

export {
  animalSort,
};
