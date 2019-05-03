function getNoOfDeletion(string) {
  let timesToDelete = 0;
  for (let i = 1; i < string.length; i += 1) {
    if (string.charAt(i) === string.charAt(i - 1)) {
      string.slice(i, i + 1);
      timesToDelete += 1;
    }
  }
  return timesToDelete;
}

function alternatingCharacters(arrayStrings) {
  const timesToDeleteArray = [];
  arrayStrings.forEach((string) => {
    const timesToDelete = getNoOfDeletion(string);
    timesToDeleteArray.push(timesToDelete);
  });
  return timesToDeleteArray;
}

export { alternatingCharacters };
