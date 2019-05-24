function binarySearch(
  numbers,
  keyToSearch,
  comparotor = (a, b) => {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  },
) {
  let lowerBound = 0;
  let upperBound = numbers.length - 1;
  while (lowerBound <= upperBound) {
    const middleIndex = parseInt((lowerBound + upperBound) / 2, 10);
    const middleValue = numbers[middleIndex];
    const comparotorValue = comparotor(keyToSearch, middleValue);
    if (comparotorValue === 0) {
      return middleIndex;
    }
    if (comparotorValue === 1) {
      lowerBound = middleIndex + 1;
    } else {
      upperBound = middleIndex - 1;
    }
  }
  const NOTFOUND = -1;
  return NOTFOUND;
}

export { binarySearch };
