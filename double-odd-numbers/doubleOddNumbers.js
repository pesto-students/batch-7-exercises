
function doubleOddNumbers(numberArray) {
  
  const OddNumbersArray = numberArray.filter((number) => {
    number % 2 !== 0
  })
  const doubledOddNumbersArray = OddNumbersArray.map((number)=> {
    number * 2
  })
  return doubleOddNumbers
}

export {
  doubleOddNumbers,
};
