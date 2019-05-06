
function doubleOddNumbers(numberArray) {
  let oddNumbersArray = []
  oddNumbersArray = numberArray.filter((number) => {
    if((number % 2) != 0) {
      //number is a Odd Number
        return number * 2;
    }
  })
  return oddNumbersArray
}

export {
  doubleOddNumbers,
};
