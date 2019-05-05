
function isPalindrome(stringToCheck) {
  if(stringToCheck === stringToCheck.split("").reverse().join("")) {
    return true
  }
  else {
    return false
  }
}

export {
  isPalindrome,
};
