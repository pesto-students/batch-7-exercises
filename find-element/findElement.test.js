import { findElement } from './findElement';

describe('findElement', () => {
  test('should return the correct output', () => {
    expect(findElement([1, 3, 5, 8, 9, 10], (num) => {
      return num % 2 === 0;
    })).toBe(8);
    expect(findElement([1, 3, 5, 9], (num) => {
      return num % 2 === 0;
    })).toEqual(undefined);
  });
});
