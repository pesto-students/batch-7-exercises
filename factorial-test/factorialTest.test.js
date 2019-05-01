const factorial = (number) => {
  let fact = 1;
  while (number !== 0) {
    fact = fact * number;
    // eslint-disable-next-line
    --number;
  }
  return fact;
};


describe('factorial test', () => {
  test('should find factorial of an integer', () => {
    const actual = factorial(5);
    const expected = 120;

    expect(actual).toEqual(expected);
  });

  test('should find factorial of 0', () => {
    
    expect(factorial(0)).toEqual(1);
  });
});
