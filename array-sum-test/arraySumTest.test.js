const sumArray = (...args) => args.reduce((acc, el) => acc + el, 0);

describe('arraySum test', () => {
  test('should sum the array of numbers', () => {
    const fixture = [1, 2, 3, 4, 5];
    const sum = sumArray(...fixture);

    expect(sum).toEqual(10);
  });
});
