import { isPrimitive } from "jest-get-type";

function sumPrimes(n) {
  let sum = 0 ;
  for (let i=2; i<=n; i++) {
    if (isPrime(i)) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
}

function isPrime(n) {
  for (let i = 2;i < n; i++ ) {
    if (n%i === 0) {
      return false;
    }
  }
  return true;
}

export {
  sumPrimes,
};
