
function addBigIntegers(input) {
  let numberInstringArray = input.split('\n');
  numberInstringArray.shift();
  //debugger;
  let sum = numberInstringArray.reduce((acc, element, index) => {
    acc = addTwoNumbersInString(acc,element);
    return acc;
  }, '');
  return sum;
}

function addTwoNumbersInString(num1,num2) {
  if (num1 == '') {
    return num2;
  }
  if (num2 == '') {
    return num1;
  }
  if (num2.length > num1.length) {
    addTwoNumbersInString(num2, num1);
  }
  let num1Reversed = num1.split('').reverse();
  let num2Reversed = num2.split('').reverse();
  let carry = 0;
  let sum = num1Reversed.reduce((acc,digit,index) => {
    debugger;
    if (index < num2Reversed.length) {
      let addition = parseInt(digit) + parseInt(num2Reversed[index]) + carry;
      let sumLastDigit = addition >= 10 ? addition % 10 : addition;
      carry = Math.floor((addition / 10));
      acc += sumLastDigit;
    } else {
      if (carry > 0) {
        let nextDigit = parseInt(digit) + carry;
        let nextDigitLast = nextDigit >=10 ? nextDigit %10 : nextDigit;
        carry = Math.floor(nextDigit/10);
        acc+=nextDigitLast;
      } else {
        acc += digit;
      }
    }

    return acc;
  },'');

  if (carry > 0) {  //if sum exceeds the length of num1 and num2
    sum += carry;
  }

  return sum.split('').reverse().join('');
}

export {
  addBigIntegers,
};
