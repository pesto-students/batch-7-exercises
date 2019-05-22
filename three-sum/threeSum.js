function threeSum(array, sum) {
  const { length } = array;
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

  const sorted = foundIndexes.sort((a, b) => a.i + a.j + a.k - (b.i + b.j + b.k));
  const { i, j, k } = sorted[0];
  return [array[i], array[j], array[k]];
}

export { threeSum };
