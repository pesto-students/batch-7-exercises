function threeSum(array, sum) {
  const { length } = array;

  if (length < 3) {
    throw new Error(
      `Expected first param to be array with at least 3 numbers, Received [${array}]`,
    );
  }

  if (Number.isNaN(sum)) {
    throw new Error(`Expected second param to be number, Received ${typeof sum}`);
  }

  const foundIndexes = [];
  for (let i = 0; i < length; i += 1) {
    for (let j = i + 1; j < length; j += 1) {
      for (let k = j + 1; k < length; k += 1) {
        if (array[i] + array[j] + array[k] === sum) {
          foundIndexes.push({ i, j, k });
        }
      }
    }
  }

  if (foundIndexes.length === 0) return null;

  const sorted = foundIndexes.sort((a, b) => a.i + a.j + a.k - (b.i + b.j + b.k));
  const { i, j, k } = sorted[0];
  return [array[i], array[j], array[k]];
}

export { threeSum };
