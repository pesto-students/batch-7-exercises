
function factorial(numberValue) {
  if(numberValue === 0){
    return 1
  }
  return numberValue * factorial(numberValue - 1)
}

export {
  factorial,
};
