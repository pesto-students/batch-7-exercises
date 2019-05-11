
function doubleOddNumbers(input) {
  const isOdd = element => ((element % 2) !=0);
  let oddNumbers = input.filter((element) => (isOdd(element)));
  return oddNumbers.map((element) => element * 2);
  
}

export {
  doubleOddNumbers,
};
