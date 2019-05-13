function dropElements(numericArray, callback) {
  var dropElementsArray = [];
  numericArray.forEach(value => {
    if (callback(value)) {
      dropElementsArray.push(value);
    }
  });
  return dropElementsArray;
}

export { dropElements };
