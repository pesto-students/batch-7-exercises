function mapFilterAndReduce(array) {
  const shortNames = array.filter(object => object.firstName.length < 5);

  return shortNames.reduce((reducedObject, object) => {
    reducedObject[object.firstName] = object.firstName.length;
    return reducedObject;
  }, {});
}

export { mapFilterAndReduce };
