function HCF(num1, num2) {
  return !num2 ? num1 : HCF(num2, num1 % num2);
}

function LCM(num1, num2) {
  return (num1 * num2) / HCF(num1, num2);
}

function smallestCommons(range) {
  let lowerBound = range[0];
  let upperBound = range[1];
  if (range[0] > range[1]) {
    lowerBound = range[1];
    upperBound = range[0];
  }
  let smallestCommon = lowerBound;

  for (let i = lowerBound; i <= upperBound; i += 1) {
    smallestCommon = LCM(smallestCommon, i);
  }

  return smallestCommon;
}

export { smallestCommons };
