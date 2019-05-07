function aperture(tupleSize, array) {
  if (tupleSize > array.length) {
    return [];
  }
  return array
    .map((num, index) => array.slice(index, index + tupleSize))
    .filter(tuple => tuple.length === tupleSize);
}

export { aperture };
