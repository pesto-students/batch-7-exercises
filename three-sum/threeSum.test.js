import { threeSum } from './threeSum';

describe('threeSum', () => {
  it('should return first triplet adding up to a given target sum.', () => {
    expect(threeSum([10, 12, 12, 15, 12], 37)).toEqual([10, 12, 15]);
    expect(threeSum([4, 3, 2, 1, 0, -1, -2], 3)).toEqual([4, 1, -2]);
    expect(threeSum([5, 3, 2, 1, 0, -1, -2], 3)).toEqual([3, 1, -1]);
  });

  it('should return null when no such triplets found', () => {
    expect(threeSum([1, 2, 3], 4)).toBeNull();
  });

  it('should throw when given invalid inputs', () => {
    expect(threeSum([], 35)).toThrow();
    expect(threeSum([1, 2, 3], 'lol')).toThrow();
    expect(threeSum([1, 2], 5)).toThrow();
  });
});
