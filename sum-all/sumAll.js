function sumAll(range) {
  if (range && range.length < 2) {
    throw new Error("Provide valid input");
  }
  var firstNum;
  var lastNum;
  if (range[0] < range[1]) {
    firstNum = range[0];
    lastNum = range[1];
  } else {
    firstNum = range[1];
    lastNum = range[0];
  }
  var totalNumbers = lastNum - firstNum + 1;
  return (totalNumbers * (lastNum + firstNum)) / 2;
}

export { sumAll };
