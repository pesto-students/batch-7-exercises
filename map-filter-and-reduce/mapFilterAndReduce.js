
function mapFilterAndReduce(arr) {
  const thresholdLength = 5;
  //Returns names which have length less than thresholdLength
  let names = arr.filter((el) => {
    if (el.firstName.length < thresholdLength) {
      return el;
    }
  });
  //Variable to store object of names which have length less than threshold
  let newObject = {};
  names.map ((el)=> {
    newObject[el.firstName] = el.firstName.length;
  })
  return newObject;
}

export {
  mapFilterAndReduce,
};

