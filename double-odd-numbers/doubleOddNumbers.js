
function doubleOddNumbers(numberArray) {
   numberArray = numberArray.filter((el)=> {
    if(el%2 === 1) {
      return (el);
    }
  });
  numberArray = numberArray.map(el => {
    return (el * 2);
  })
  return (numberArray);
}

export {
  doubleOddNumbers,
};
