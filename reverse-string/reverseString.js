
function reverseString(stringValue) {
  var splittedArray = stringValue.split('')
  var reversedString = ""
  for(let i = splittedArray.length - 1; i >= 0; i--) {
    reversedString += splittedArray[i]
    console.log(reversedString)
  }
  return reversedString
}

export {
  reverseString,
};
