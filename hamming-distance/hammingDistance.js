function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) {
    throw new Error('String length does not match');
  }
  let count = 0;
  for (let i = 0; i < str1.length; i += 1) {
    if (str1[i] !== str2[i]) {
      count += 1;
    }
  }
  return count;
}

export { hammingDistance };
