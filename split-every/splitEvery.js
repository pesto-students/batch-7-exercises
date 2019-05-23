function splitEvery(subSetCount, data) {
  if (subSetCount === 0 || subSetCount === -1) {
    throw new Error('Invalid first argument, should be positive');
  }
  const splitData = [];
  const len = data.length;
  for (let i = 0; i < len; i += subSetCount) {
    splitData.push(data.slice(i, i + subSetCount));
  }
  return splitData;
}

export { splitEvery };
