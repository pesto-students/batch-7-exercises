function isPrime(number) {
  if (number === 0 || number === 1) return false;
  if (number === 2) return true;

  if (number > 2) {
    const rootOfNumber = Math.sqrt(number);
    for (let i = 2; i <= rootOfNumber; i += 1) {
      if (number % i === 0) return false;
    }
    return true;
  }

  // Default
  return false;
}

function sumPrimes(uptoNumber) {
  let sumOfPrimes = 0;
  for (let num = 0; num <= uptoNumber; num += 1) {
    if (isPrime(num)) {
      sumOfPrimes += num;
    }
  }
  return sumOfPrimes;
}

export {
  sumPrimes,
};
