function hammingDistance(firstString, secondString) {
  const lengthOfFirstString = firstString.length;
  const lengthOfSecondString = secondString.length;

  if (lengthOfFirstString !== lengthOfSecondString) {
    throw new Error(`Expected two same length strings, Received string lengths ${lengthOfFirstString}, ${lengthOfSecondString}`);
  }

  return secondString
    .split('')
    .reduce((acc, char, index) => {
      const charOfFirstStringAtIndex = firstString.charAt(index);
      return (char !== charOfFirstStringAtIndex)
        ? acc + 1
        : acc;
    }, 0);
}

export { hammingDistance };
