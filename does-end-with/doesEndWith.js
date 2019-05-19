function doesEndWith(subset, set) {
  for (let i = set.length - 1, j = subset.length - 1; j >= 0; j -= 1, i -= 1) {
    if (subset[j] !== set[i]) {
      return false;
    }
  }
  return true;
}

export { doesEndWith };
