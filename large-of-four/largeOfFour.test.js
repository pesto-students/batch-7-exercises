import { largeOfFour } from './largeOfFour';

describe('largeOfFour', () => {
  test('should return an array', () => {
    expect(Array
      .isArray(largeOfFour([
        [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1],
      ]))).toBe(true);

    expect(largeOfFour([
      [13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1],
    ])).toEqual([27, 5, 39, 1001]);

    expect(largeOfFour([
      [4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1],
    ])).toEqual([9, 35, 97, 1000000]);
  });
});
