function isOdd(num) {
  return num % 2 === 1;
}

function sumFibs(number) {
  let fib1 = 1;
  let fib2 = 1;

  let sum = 0;
  while (fib1 < number) {
    if (isOdd(fib1)) {
      sum += fib1;
    }

    const newFib = fib1 + fib2;
    fib1 = fib2;
    fib2 = newFib;
  }
  return sum;
}

export {
  sumFibs,
};
