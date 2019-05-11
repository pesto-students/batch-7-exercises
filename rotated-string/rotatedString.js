
function rotatedString(string1,string2) {
  var temp = ''
  temp = string1 + string1
  if(string1 === string2) {
    return false
  }
  if(temp.search(string2) !== -1){
    return true
  } else {
    return false
  }
}

export {
  rotatedString,
};
