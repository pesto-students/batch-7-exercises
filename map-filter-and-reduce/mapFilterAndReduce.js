
function mapFilterAndReduce(array) {
  let firstNamesWithLengthGreaterThanFive = array.filter(object => object.firstName.length < 5);
  let output = firstNamesWithLengthGreaterThanFive.reduce((acc, object) => {

    acc[object.firstName] = object.firstName.length;
    return acc;
  }, {});
  return output;
}

export {
  mapFilterAndReduce,
};
