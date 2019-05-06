function pairwise(arr, targetSum) {
  const matchedPairs = [];
  let totalSumOfPairs = 0;

  const isMatchedPrevious = (i, j) => matchedPairs.includes(i) || matchedPairs.includes(j);

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === targetSum && !isMatchedPrevious(i, j)) {
        matchedPairs.push(i, j);
        totalSumOfPairs += (i + j);
      }
    }
  }
  return totalSumOfPairs;
}

export { pairwise };
