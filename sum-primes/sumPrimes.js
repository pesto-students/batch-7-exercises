function sumPrimes(maxBound) {
  var sumOfPrime = 0;
  for (var i = 2; i <= maxBound; i++) {
    if (isPrime(i)) {
      sumOfPrime += i;
    }
  }
  return sumOfPrime;
}

function isPrime(number) {
  if (number == 1) {
    return false;
  }
  for (var i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

export { sumPrimes };
