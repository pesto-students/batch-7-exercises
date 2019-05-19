function alphabeticShift(alphabeticString) {
  var map = Array.prototype.map;
  var shiftedString = map
    .call(alphabeticString, function(x) {
      return x.charCodeAt(0);
    })
    .reduce((acc, curr) => acc + String.fromCharCode(curr + 1), "");
  return shiftedString;
}

export { alphabeticShift };
