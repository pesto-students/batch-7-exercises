
function reverseString(...args) {
  var stringToBeReversed = args[0];
  var reversedString = '';
      for( let character of stringToBeReversed ){
        reversedString = character + reversedString;
      }
      return reversedString;
}

export {
  reverseString,
};
