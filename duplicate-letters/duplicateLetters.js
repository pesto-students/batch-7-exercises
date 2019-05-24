
function duplicateLetters(str) {
  const arrayOfString = str.split('');
  let duplicateValuesArray = [];
  var c = 0;
  for ( let i = 0; i < arrayOfString.length; i ++) {
    for ( let j = 0; j < arrayOfString.length && j !== i; j ++) {
      if (arrayOfString[i] === arrayOfString[j] && duplicateValuesArray !== arrayOfString[i]) {
        c ++;
        duplicateValuesArray = arrayOfString[i];
        break;
      }
    }
  }
  if (c === 0) return false;
  else 
  return c;
}

export {
  duplicateLetters,
};
