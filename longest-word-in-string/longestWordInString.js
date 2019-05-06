function longestWordInString(str) {
  const words = str.split(' ');
  return words.reduce((longest, word) => {
    if (word.length > longest) {
      return word.length;
    }
    return longest;
  }, 0);
}

export { longestWordInString };
