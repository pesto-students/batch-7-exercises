function addBigIntegers(stringOfNumbers) {
  var numberStringArray = stringOfNumbers.split("\n");
  var countOfNumber = parseInt(numberStringArray[0]);
  numberStringArray.shift();
  var maxLengthOfNumber = 0;
  var finalSum = "";
  var reverseNumberStrings = numberStringArray.map(element => {
    if (element.length > maxLengthOfNumber) {
      maxLengthOfNumber = element.length;
    }
    return element
      .split("")
      .reverse()
      .join("");
  });
  var sum = 0;
  for (var i = 0; i < maxLengthOfNumber; i++) {
    sum += reverseNumberStrings.reduce((accumulator, number) => {
      return accumulator + parseInt(number[i] ? number[i] : 0);
    }, 0);
    finalSum += sum % 10;
    sum = parseInt(sum / 10);
  }
  if (sum != 0) {
    finalSum += sum;
  }

  return finalSum
    .split("")
    .reverse()
    .join("");
}

export { addBigIntegers };
