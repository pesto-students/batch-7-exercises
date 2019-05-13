function abbreviateString(string) {
  if (typeof string != "string") {
    throw new Error();
  }
  var words = string.split(" ");
  var firstWord = words[0];
  var lastWord = words[words.length - 1];
  return firstWord + " " + lastWord[0].toUpperCase() + ".";
}

export { abbreviateString };
