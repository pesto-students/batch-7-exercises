function alternatingCharacters(stringArray) {
  var deletionCountArray = [];
  stringArray.map(function(string) {
    var count = 0;
    var char = "";
    for (var index in string) {
      if (char == string[index]) {
        count++;
      } else {
        char = string[index];
      }
    }
    deletionCountArray.push(count);
  });
  return deletionCountArray;
}

export { alternatingCharacters };
