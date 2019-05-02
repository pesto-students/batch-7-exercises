
function factorial(numberValue) {
  var factorialValue = 1;
  for(var i = 1; i<=numberValue; i++){
    factorialValue = factorialValue * i
  }
  return factorialValue;
}

export {
  factorial,
};
