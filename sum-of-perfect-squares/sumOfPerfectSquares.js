
function is_square(n){  
  var sqrt_n = (Math.sqrt(n));  
  return (sqrt_n*sqrt_n === n);  
}

function sumOfPerfectSquares(n) {
  //console.log(args);
  if(is_square(n)) 
    {
        return 1;  
    }

    // The result is 4 if n can be written in the 
    // form of 4^k*(8*m + 7).
    while ((n & 3) == 0) // n%4 == 0  
    {
        n >>= 2;  
    }
    if ((n & 7) == 7) // n%8 == 7
    {
        return 4;
    }
    

    // Check whether 2 is the result.
    var sqrt_n = (Math.sqrt(n)); 
    for(var i = 1; i <= sqrt_n; i++)
    {  
        if (is_square(n - i*i)) 
        {
            return 2;  
        }
    }  

    return 3;  
} 


export {
  sumOfPerfectSquares,
};
//sumOfPerfectSquares(15);