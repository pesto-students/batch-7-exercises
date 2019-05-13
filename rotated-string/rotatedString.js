function rotatedString(string1, string2) {
  if (string1 == string2 || string1.length != string2.length) {
    return false;
  }
  var stringLength = string1.length;
  var stringLeftPart = string1.substr(0, stringLength / 2);
  var stringRightPart = string1.substr(stringLength / 2, stringLength - 1);
  var leftPartIndex = string2.indexOf(stringLeftPart);
  var rightPartIndex = string2.indexOf(stringRightPart);
  if (leftPartIndex == -1 && rightPartIndex == -1) {
    return false;
  }
  if (leftPartIndex !== -1) {
    var startIndexOfString1 = stringLength - leftPartIndex;
    var startIndexOfString2 = 0;
    console.log(startIndexOfString1 + " " + startIndexOfString2);
    for (
      var str1Index = startIndexOfString1, str2Index = startIndexOfString2;
      str2Index < stringLength;
      str1Index = (str1Index + 1) % stringLength, str2Index = str2Index + 1
    ) {
      if (string1[str1Index] !== string2[str2Index]) {
        return false;
      }
    }
    return true;
  } else if (rightPartIndex !== -1) {
    var startIndexOfString1 = stringLength / 2 - rightPartIndex;
    var startIndexOfString2 = 0;
    for (
      var str1Index = startIndexOfString1, str2Index = startIndexOfString2;
      str2Index < stringLength;
      str1Index = (str1Index + 1) % stringLength, str2Index = str2Index + 1
    ) {
      if (string1[str1Index] !== string2[str2Index]) {
        return false;
      }
    }
    return true;
  }
}

export { rotatedString };
