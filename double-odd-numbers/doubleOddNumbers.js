function doubleOddNumbers(numbers) {
  const oddNumbers = numbers.filter(number => number % 2 !== 0);
  return oddNumbers.map(number => number * 2);
}

export { doubleOddNumbers };
