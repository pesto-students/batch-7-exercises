const getRandomGenerator = (min, max) => () => Math.floor(Math.random() * max) + min;

function uniqueRandom(lowerBound, upperBound) {
  const getRandom = getRandomGenerator(lowerBound, upperBound);
  let prevRandom = getRandom();

  return () => {
    let newRandom;
    do {
      newRandom = getRandom();
    } while (newRandom === prevRandom);
    prevRandom = newRandom;
    return newRandom;
  };
}

export { uniqueRandom };
