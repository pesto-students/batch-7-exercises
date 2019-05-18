function hammingDistance(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    throw new Error("Strings must be of the same length");
  }

  const distance = stringOne.split('').reduce((distance, character, index) => {
    return character === stringTwo[index] ? distance : distance += 1;
  }, 0);

  return distance;
}

export { hammingDistance };
