
function applyOperator(operator, ...numbers) {

  var sumOfNumbers = 0
  var differenceOfNumbers = 0
  var productOfNumbers = 1
  var quotientOfNumbers = 1
  var modulusOfNumbers = 1
  if (operator === '+')
    {
    numbers.map((number) => {
      sumOfNumbers += number;
    });
    return sumOfNumbers;
  }
  else if (operator === '-')
    {
    numbers.map((number) => {
      differenceOfNumbers -= number;
    });
    return differenceOfNumbers
  }
  else if (operator === '*')
    {
    numbers.map((number) => {
      productOfNumbers *= number;
    });
    return productOfNumbers
  }
  else if (operator === '/')
    {
    numbers.map((number) => {
      quotientOfNumbers /= number;
    });
    return Number(quotientOfNumbers.toFixed(4))
  }
  else if (operator === '%')
  {
    if (numbers.length === 1) {
      return numbers     
    }
    numbers.map((number) => {
      modulusOfNumbers %= number;
    });
    return Number(modulusOfNumbers[0])
  }
  else {
    throw new Error("No Operator specified")
  }
}
export {
  applyOperator,
};
