/* eslint-disable no-undef */

const numberSum = (a, b) => a + b;

describe('numberSum test', () => {
  test('should sum two numbers', () => {
    const actual = numberSum(2, 3);
    const expected = 5;

    expect(actual).toEqual(expected);
  });
});
