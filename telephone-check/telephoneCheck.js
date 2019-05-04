function telephoneCheck(number) {
  var telephoneRegex = /\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
  if (number[0] !== "1") {
    number = "1" + number;
  }
  var isNumberValidate = telephoneRegex.test(number);
  var numberOfOpenParanthesis = number.match(/\(/)
    ? number.match(/\(/).length
    : 0;
  var numberOfCloseParanthesis = number.match(/\)/)
    ? number.match(/\)/).length
    : 0;
  var numberLength = number.match(/\d/g).length;
  var isBalancedParanthesis =
    numberOfOpenParanthesis === numberOfCloseParanthesis && numberLength === 11;
  return isNumberValidate && isBalancedParanthesis;
}

export { telephoneCheck };
