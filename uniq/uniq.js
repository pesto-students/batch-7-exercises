function uniq(array) {
  for (const key in array) {
    if (Object.is(array[key], -0)) {
      array[key] = '-0';
    }
    if (array[key] && typeof array[key] === 'object') {
      array[key] = Object.entries(array[key]).toString();
    }
  }
  return Array.from(new Set([...array]));
}

export { uniq };
