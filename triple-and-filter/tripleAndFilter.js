function tripleAndFilter(array) {
  const isDivisiblebyFive = n => n % 5 === 0;
  return array
    .map(element => element * 3)
    .filter(element => isDivisiblebyFive(element));
}

export { tripleAndFilter };
