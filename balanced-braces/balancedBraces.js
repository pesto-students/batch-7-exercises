
function balancedBraces(str) {
  const arrayOfString = str.split('');
  let openBraces = 0;
  let closedBraces = 0;
  for ( let i = 0; i < arrayOfString.length; i ++) {
    if ( arrayOfString[i] === '{' || arrayOfString[i] === '(' || arrayOfString[i] === '[') {
      openBraces ++;
    }
    else if ( arrayOfString[i] === '}' || arrayOfString[i] === ')' || arrayOfString[i] === ']') {
      closedBraces ++;
    }
  }
  return (openBraces === closedBraces);
}

export {
  balancedBraces,
};
