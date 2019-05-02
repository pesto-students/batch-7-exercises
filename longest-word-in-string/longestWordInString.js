function longestWordInString(sentence) {
  var wordArray = sentence.split(" ");
  var maxWordLength = 0;
  wordArray.forEach(word => {
    var length = word.length;
    if (length > maxWordLength) {
      maxWordLength = length;
    }
  });
  return maxWordLength;
}

export { longestWordInString };
