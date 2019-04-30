import { joinArrays } from './joinArrays';

describe('joinArrays', () => {
  test('returns a single array of all the parameters concatenated together', () => {
    expect(joinArrays([1], [2], [3])).toEqual([1, 2, 3]);
    expect(joinArrays([1], [2], [3], [1], [2], [3])).toEqual([1, 2, 3, 1, 2, 3]);
    expect(joinArrays([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(joinArrays([1], [3], [0], [7])).toEqual([1, 3, 0, 7]);
  });
});
