function binarySearch(key, array) {
  let startIndex = 0;
  let lastIndex = array.length - 1;
  while (startIndex <= lastIndex) {
    const middle = parseInt((startIndex + lastIndex) / 2, 10);
    if (array[middle] === key) {
      return middle;
    }
    if (key < array[middle]) {
      lastIndex = middle - 1;
    } else {
      startIndex = middle + 1;
    }
  }
  return -1;
}

function searchSortedMatrix({ search, matrix }) {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  const lastCol = colLen - 1;
  let possibleRowIndex = -1;
  for (let i = 0; i < rowLen; i += 1) {
    const row = matrix[i];
    if (search <= row[lastCol]) {
      possibleRowIndex = i;
      break;
    }
  }
  if (possibleRowIndex === -1) {
    return false;
  }

  const index = binarySearch(search, matrix[possibleRowIndex]);
  if (index !== -1) {
    return true;
  }
  return false;
}

export { searchSortedMatrix };
