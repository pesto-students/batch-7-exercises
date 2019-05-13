
function isTriangle(...args) {
  var side1 = args[0];
  var side2 = args[1];
  var side3 = args[2];
  if((( side1+side2 )> side3) || ((side2+side3) > side1) || ((side3+side1) > side2)){
    return true;
  }
  else {
    return false;
  }
 
}

export {
  isTriangle,
};
