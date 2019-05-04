
function abbreviateString(input) {
  if (typeof input != 'string') {
    throw new Error('Expected a string');
  }
  let inputWordsArray = input.split(' ');
  let firsWord = inputWordsArray[0];
  let lastWord = inputWordsArray[inputWordsArray.length -1];
  let lastWordFirstLetter = lastWord[0].toUpperCase()
  return firsWord + ' ' + lastWordFirstLetter + '.'
}

export {
  abbreviateString,
};
