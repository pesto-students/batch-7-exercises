function makeRandom(lowerBound, upperBound) {
  return Math.floor(Math.random() * upperBound) + lowerBound;
}

function uniqueRandom(lowerBound, upperBound) {
  return makeRandom(lowerBound, upperBound);
}

export {
  uniqueRandom,
};
