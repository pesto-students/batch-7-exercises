
function longestWordInString(statement) {
  const arrayOfWords = statement.split(' ');
  let longestLen = 0;
  arrayOfWords.forEach((word) => {
    const { length } = word;
    if (longestLen < length) longestLen = length;
  });
  return longestLen;
}

export {
  longestWordInString,
};
