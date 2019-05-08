
function animalSort(animalArray) {
  const sortedAnimalArray = animalArray.sort((a,b)=>{
    a.numberOfLegs - b.numberOfLegs
  })
return sortedAnimalArray
  
}

export {
  animalSort,
};
