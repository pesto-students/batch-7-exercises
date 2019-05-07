
function animalSort(arr) {
    if (arr.length === 0) {
      return [];
    }
     arr = arr.sort((animal1,animal2) => { 
      let difference = animal1.numberOfLegs - animal2.numberOfLegs;
      if (difference === 0) {
        if (animal1.name > animal2.name) {
          return 1;
        } 
        else {
          return -1;
        }
      }
      else if (difference < 0) {
        return -1;
      }
      else {
        return 1;
      }
    });
    return (arr);
  }
  


// export {
//   animalSort,
// };
// const arr = [
//   { name: 'Dog', numberOfLegs: 4 },
//   { name: 'Bird', numberOfLegs: 2 },
//   { name: 'Snake', numberOfLegs: 0 },
// ];
//  animalSort(arr);