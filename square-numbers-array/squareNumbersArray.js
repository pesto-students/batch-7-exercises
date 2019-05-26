function squareNumbersArray(array) {
  return array.map((el) => {
    if (typeof el !== 'number') {
      throw new Error(`Expected array of numbers. Found an element of type ${typeof el}`);
    }
    return el ** 2;
  });
}

export { squareNumbersArray };
