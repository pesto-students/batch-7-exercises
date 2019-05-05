function GCD(num1, num2) {
  return !num2 ? num1 : GCD(num2, num1 % num2);
}
function LCM(num1, num2) {
  return (num1 * num2) / GCD(num1, num2);
}

function smallestCommons(numberArry) {
  var min, max;
  if (numberArry[0] > numberArry[1]) {
    min = numberArry[1];
    max = numberArry[0];
  } else {
    min = numberArry[0];
    max = numberArry[1];
  }
  var commonMultiple = min;
  for (var i = min; i <= max; i++) {
    commonMultiple = LCM(commonMultiple, i);
  }
  return commonMultiple;
}

export { smallestCommons };
