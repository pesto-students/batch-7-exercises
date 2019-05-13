function largeOfFour(arrayOfNumericArray) {
  var conatinsMaxOfSubArray = [];

  arrayOfNumericArray.forEach(numericArray => {
    var max = Number.MIN_VALUE;
    numericArray.forEach(number => {
      if (number > max) {
        max = number;
      }
    });
    conatinsMaxOfSubArray.push(max);
  });
  return conatinsMaxOfSubArray;
}

export { largeOfFour };
