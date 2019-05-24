function union(m, n) {
  const array1 = m;
  const array2 = n;

  for (const key in array1) {
    if (Object.is(array1[key], -0)) {
      array1[key] = '-0';
    }
  }

  for (const key in array2) {
    if (Object.is(array2[key], -0)) {
      array2[key] = '-0';
    }
  }
  return Array.from(new Set([...array1, ...array2]));
}

export { union };
