function sumFibs(number) {
  if (number == 0) {
    return 0;
  }
  if (number == 1) {
    return 2;
  }
  var sum = 1,
    prevFibonacci = 1,
    currentFibonacci = 1,
    temproray;
  while (currentFibonacci <= number) {
    if (currentFibonacci % 2 != 0) {
      sum += currentFibonacci;
    }
    temproray = currentFibonacci;
    currentFibonacci = prevFibonacci + currentFibonacci;
    prevFibonacci = temproray;
  }

  return sum;
}

export { sumFibs };
