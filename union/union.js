function union(m, n) {
  const array1 = m;
  const array2 = n;
  let index = array1.indexOf(-0);
  array1[index] = '-0';
  index = array2.indexOf(-0);
  array2[index] = '-0';
  return Array.from(new Set([...array1, ...array2]));
}

export { union };
