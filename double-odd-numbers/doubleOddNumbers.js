
function doubleOddNumbers(arr) {
   arr = arr.filter((el)=> {
    if(el%2 !== 0) {
      return (el);
    }
  });
  arr = arr.map(el => {
    return (el * 2);
  })
  return (arr);
}

export {
  doubleOddNumbers,
};
