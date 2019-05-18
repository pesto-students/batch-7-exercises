
function primalityTest(number) {
  if (number < 2) {
    return false;
  }
  const isPrime = num => {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return isPrime(number);
}

export {
  primalityTest,
};
