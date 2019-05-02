function objectPairs(obj) {
  const arrayOfPairs = [];
  for (const key in obj) {
    const pair = [];
    pair.push(key);
    pair.push(obj[key]);
    arrayOfPairs.push(pair);
  }
  return arrayOfPairs;
}

export { objectPairs };
