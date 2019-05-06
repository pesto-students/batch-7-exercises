
function doubleOddNumbers(input) {
  let oddNumbers = input.filter((element) => (element % 2) !=0);
  let output = oddNumbers.map((element) => element * 2);
  return output;
}

export {
  doubleOddNumbers,
};
