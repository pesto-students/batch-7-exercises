function reverseString(string) {
  var reverseString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
}

export { reverseString };
