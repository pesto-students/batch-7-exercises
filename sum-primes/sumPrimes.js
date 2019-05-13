function isPrime(num) {
  const sqrt = Math.sqrt(num);
  let numberIsPrime = true;

  // If a number is not divisible by any number
  // from 2 to its square root, it can be assumed
  // to be a Prime Number.
  // Even numbers are not prime.
  for (let i = 3; i <= sqrt; i += 2) {
    if (!(num % i)) {
      numberIsPrime = false;
      break;
    }
  }
  return numberIsPrime;
}

function getPrimesList(upperBound) {
  const primesList = [2];
  let i = 3;
  while (i <= upperBound) {
    if (isPrime(i)) {
      primesList.push(i);
    }
    i += 2;
  }
  return primesList;
}

function sumPrimes(upperBound) {
  const primeNumbers = getPrimesList(upperBound);
  return primeNumbers.reduce((total, prime) => total + prime);
}

export { sumPrimes };
