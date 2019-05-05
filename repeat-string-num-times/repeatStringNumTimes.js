
function repeatStringNumTimes(stringToBeRepeated,times) {
  var repeatedString = ""
  if( times < 0) {
    return repeatedString
  }
  for(let i = 1;i <= times;i++) {
    repeatedString += stringToBeRepeated
  }
  return repeatedString
}

export {
  repeatStringNumTimes,
};
