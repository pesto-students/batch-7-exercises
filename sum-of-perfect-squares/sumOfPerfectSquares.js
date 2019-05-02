
function sumOfPerfectSquares(...args) {
  // base cases 
  if (args <= 3) 
  return args; 

  var res = args; // Maximum squares required is n (1*1 + 1*1 + ..) 

// Go through all smaller numbers 
// to recursively find minimum 
for (var x = 1; x <= args; x++) 
{ 
  var temp = x*x;   
  if (temp > args) 
      break; 
  else
      res =  min(res, 1+sumOfPerfectSquares(args - temp)); 
} 
return res; 
}
function min(a,b){
  var result = (a<b) ? a:b;
  return result; 
}

export {
  sumOfPerfectSquares,
};
