function splitEvery(splitIn, array) {
  if (splitIn < 1) {
    throw new Error(`Only positive numbers are expected. Received ${splitIn}`);
  }
  const isString = typeof array === 'string';
  if (isString) {
    array = array.split('');
  }
  const splitElements = [];
  while (array.length > 0) {
    let splitArray = array.splice(0, splitIn);
    if (isString) {
      splitArray = splitArray.join('');
    }
    splitElements.push(splitArray);
  }
  return splitElements;
}

export { splitEvery };
