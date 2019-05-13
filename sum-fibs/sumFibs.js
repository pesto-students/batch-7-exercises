function getLastElement(arr) {
  const lastIndex = arr.length - 1;
  return arr[lastIndex];
}

function fibonacciSeries(upperBound) {
  const fibonacci = [1, 1];
  while (getLastElement(fibonacci) < upperBound) {
    const lastElement = getLastElement(fibonacci);
    const secondLastElement = fibonacci[fibonacci.length - 2];
    fibonacci.push(lastElement + secondLastElement);
  }
  return fibonacci;
}

function sumFibs(upperBound) {
  const fibonacci = fibonacciSeries(upperBound);
  return fibonacci.reduce((total, num) => {
    if (num % 2 && num <= upperBound) {
      return total + num;
    }
    return total;
  }, 0);
}

export { sumFibs };
