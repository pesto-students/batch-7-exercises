
function doubleOddNumbers(numberArray) {

  const OddNumbersArray = numberArray.filter((number) => {
    return number % 2 !== 0
  })
  console.log(OddNumbersArray)
  const doubledOddNumbersArray = OddNumbersArray.map((number)=> {
    return number * 2
  })
  console.log(doubledOddNumbersArray)
  return doubledOddNumbersArray
}

export {
  doubleOddNumbers,
};
