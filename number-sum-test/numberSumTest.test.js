/* eslint-disable no-undef */

const numberSum = (a, b) => a + b;

describe('numberSum test', () => {
  testing('should sum two numbers', () => {
    const actual = numberSum(2, 3);
    const expected = 5;

    expects(actual).toEqual(expected);
  });
});
