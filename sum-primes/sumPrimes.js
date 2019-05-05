function isPrime(n){
  var c= 0;
  for( var i = 1; i <= n; i++){
    if(n % i == 0){
      c++;
    }
  }
  if(c != 2)
  return 0;
  else
  return n;
}

function sumPrimes(args) {
  var sum = 0;
  for( var i = 1; i <= args; i++ ){
    sum = sum + isPrime(i);
  }
  return sum;
}


export {
  sumPrimes,
};
