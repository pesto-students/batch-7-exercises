function alienAlphabet(stringArray) {
  var array = [];
  for (var i = 0; i < stringArray.length - 1; i++) {
    array.push([stringArray[i], stringArray[i + 1]]);
  }
  var sortedOrderChar = [];
  var distinctChar = {};
  array.map(element => {
    var char1 = element[0][0];
    var char2 = element[1][0];
    if (!distinctChar[char1]) {
      sortedOrderChar.push(char1);
      distinctChar[char1] = true;
    }

    if (!distinctChar[char2]) {
      sortedOrderChar.push(char2);
      distinctChar[char2] = true;
    }
  });
  return sortedOrderChar;
}

export { alienAlphabet };
