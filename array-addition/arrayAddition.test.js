import { arrayAddition } from './arrayAddition';

describe('arrayAddition', () => {
  it('should return addition of 2 arrays as a separate array', () => {
    expect(arrayAddition([-1, -2, -3, -4], [1, 2, 3, 4])).toEqual([0, 0, 0, 0]);
  });

  it('should return addition of 2 arrays as a separate array', () => {
    expect(arrayAddition([0, 0, 0, 0], [1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should return addition of 2 arrays as a separate array of length of the bigger array', () => {
    expect(arrayAddition([0, 1, 0, 4], [100, -200, 200, 400, 0, 99999])).toEqual([100, -199, 200, 404, 0, 99999]);
  });

  it('should throw if one of the array is empty', () => {
    expect(() => arrayAddition([], [100, -200, 200, 400, 0, 99999])).toThrow();
  });

  it('should throw if parameters are not arrays', () => {
    expect(() => arrayAddition('a', [100, -200, 200, 400, 0, 99999])).toThrow();
  });

  it('should throw if parameters are not arrays', () => {
    expect(() => arrayAddition('a', 1)).toThrow();
  });

  it('should throw error on non strictly numerical arrays', () => {
    expect(() => arrayAddition(['1', '2', '3', '4'], [2, 'b', 'c'])).toThrow();
  });
});
