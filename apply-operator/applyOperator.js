
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
  if (operator === '-')
    {
    numbers.map((number) => {
      differenceOfNumbers -= number;
    });
    return differenceOfNumbers
  }
  if (operator === '*')
    {
    numbers.map((number) => {
      productOfNumbers *= number;
    });
    return productOfNumbers
  }
  if (operator === '/')
    {
    numbers.map((number) => {
      quotientOfNumbers /= number;
    });
    return quotientOfNumbers
  }
  if (operator === '%')
  {
    if (numbers.length === 1) {
      return numbers     
    }
    numbers.map((number) => {
      modulusOfNumbers %= number;
    });
    return modulusOfNumbers
  }
  if (operator === ""){
    throw new Error("No Operator specified")
  }
}
export {
  applyOperator,
};
