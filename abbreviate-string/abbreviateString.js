
function abbreviateString(input) {
  debugger;
  let inputWordsArray = input.split(' ');
  let firsWord = inputWordsArray[0];
  let lastWord = inputWordsArray[length -1];
  let lastWordFirstLetter = lastWord.charAt(0).toUpperCase()
  return firsWord + ' ' + lastWordFirstLetter + '. '
}

export {
  abbreviateString,
};
