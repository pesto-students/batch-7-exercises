
function mapFilterAndReduce(array) {
  let firstNamesWithLengthGreaterThan5 = array.filter(object => object.firstName.length < 5);
  let output = firstNamesWithLengthGreaterThan5.reduce((acc , object) => {
    return acc[object.firstName] = object.firstName.length;
  },{});
  return output;
}

export {
  mapFilterAndReduce,
};
