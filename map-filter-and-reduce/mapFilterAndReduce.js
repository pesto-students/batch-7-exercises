
function mapFilterAndReduce(array) {
  debugger;
  let firstNamesWithLengthGreaterThan5 = array.filter(object => object.firstName.length < 5);
  let output = firstNamesWithLengthGreaterThan5.reduce((acc , object) => {
    
    acc[object.firstName] = object.firstName.length;
    return acc;
  },{});
  return output;
}

export {
  mapFilterAndReduce,
};
