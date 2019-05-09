function searchSortedMatrix({ search, matrix }) {
  let rowToSearchIn = 0;

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    const row = matrix[rowIndex];
    const firstValueOfRow = row[0];

    if (search < firstValueOfRow) {
      rowToSearchIn = rowIndex - 1;
      break;
    }
  }

  const rowToLookInto = matrix[rowToSearchIn];
  let columnLength = rowToLookInto.length;
  while (columnLength) {
    columnLength -= 1;
    if (search === rowToLookInto[columnLength]) {
      return true;
    }
  }
  return false;
}

export { searchSortedMatrix };
