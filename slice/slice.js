function slice(startIndex, endIndex, object) {
  let array = object;
  const isString = typeof object === 'string';
  if (isString) {
    array = object.split('');
  }
  const slicedArray = array.slice(startIndex, endIndex);
  if (isString) {
    return slicedArray.join('');
  }
  return slicedArray;
}

export { slice };
