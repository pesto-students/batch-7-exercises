
function factorial(args) {
  var factorial = 1;
  for( var i = 1; i <= args; i++){
    factorial *= i;
  }
  return factorial;
}

export {
  factorial,
};
