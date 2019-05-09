
function factorial(n) {
  var factorialNumber = 1;
  for(var i=1;i<=n;i++)
  {
    factorialNumber = factorialNumber * i;
  }
  return factorialNumber;
}

export {
  factorial,
};
