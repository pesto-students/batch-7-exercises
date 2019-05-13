function isPalindrome(data) {
  var string;
  if (typeof data == "string") {
    string = data.toLowerCase();
    var regexExpToGetAlphaNumeric = /[^a-zA-Z0-9]/gi;
    string = string.replace(regexExpToGetAlphaNumeric, "");
  } else {
    string = data.toString();
  }

  for (var i = 0, j = string.length - 1; i < string.length / 2; i++, j--) {
    if (string[i] != string[j]) {
      return false;
    }
  }
  return true;
}

export { isPalindrome };
