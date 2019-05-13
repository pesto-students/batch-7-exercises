function pairwise(arr, target) {
  const indices = [];
  const sortedArr = [...arr].sort((firstEl, secondEl) => firstEl - secondEl);
  const lastIndex = sortedArr.length - 1;

  for (let i = 0, j = lastIndex; i < j;) {
    if (sortedArr[i] + sortedArr[j] > target) {
      j -= 1;
    } else if (sortedArr[i] + sortedArr[j] < target) {
      i += 1;
    } else {
      let indexInOriginalArr = arr.indexOf(sortedArr[i]);
      indices.push(indexInOriginalArr);
      arr[indexInOriginalArr] = null;
      indexInOriginalArr = arr.indexOf(sortedArr[j]);
      indices.push(indexInOriginalArr);
      arr[indexInOriginalArr] = null;
      i += 1;
      j -= 1;
    }
  }
  if (indices.length === 0) {
    return 0;
  }
  return indices.reduce((total, index) => total + index);
}

export { pairwise };
