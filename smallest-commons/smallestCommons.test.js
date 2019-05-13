import { smallestCommons } from './smallestCommons';

describe('smallestCommons', () => {
  test('should return a number', () => {
    expect(typeof smallestCommons([1, 5])).toEqual('number');
  });
  test('should should return the correct output', () => {
    expect(smallestCommons([1, 5])).toBe(60);
    expect(smallestCommons([5, 1])).toBe(60);
    expect(smallestCommons([1, 13])).toBe(360360);
    expect(smallestCommons([23, 18])).toBe(6056820);
  });
});
