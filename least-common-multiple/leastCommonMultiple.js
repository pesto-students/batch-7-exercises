
function leastCommonMultiple(number1, number2) {
  if ( number1 === 0) {
    return 0;
  }
  if (number2 === 0) {
    return 0;
  }
  number1 = Math.abs(number1);
  number2 = Math.abs(number2);
  let hcf = 1;
  for( let i = number1; i >= 0; i --) {
    if (number1 % i === 0 && number2 % i === 0) {
      hcf = i;
      break;
    }
  }
  return ((number1 * number2) / hcf);
}

export {
  leastCommonMultiple,
};
