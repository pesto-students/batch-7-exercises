
function isPalindrome(stringToCheck) {

  var regx = /[^A-Za-z0-9]/g
  if(typeof stringToCheck !== "string") {
    stringToCheck = stringToCheck.toString()
  }
  let string = stringToCheck.toLowerCase().replace(regx,'')
  let reversedtring = string.split("").reverse().join("")
  if(string === reversedtring) {
    return true
  }
  else {
    return false
  }
}

export {
  isPalindrome,
};
