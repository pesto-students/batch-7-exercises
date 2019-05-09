function isPrime(num)
{
  for(let i=2;i <= Math.sqrt(num);i++)
  {
    if(num % i == 0){ 
      return false;
    }
  }
  return num > 1;
}

function sumPrimes(n) { 
  let sumOfPrimes = 0;
  while(n!=1) {
    if(isPrime(n)) { 
      sumOfPrimes = sumOfPrimes + n;
    }
   n--;
  }

  return sumOfPrimes;
}



export {
  sumPrimes,
};
