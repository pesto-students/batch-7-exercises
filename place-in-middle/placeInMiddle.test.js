import { placeInMiddle } from './placeInMiddle';

describe('placeInMiddle', () => {
  test('places a list of values in the middle of an array', () => {
    expect(placeInMiddle([1, 2, 6, 7], [3, 4, 5])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(placeInMiddle([1], [3, 4, 5])).toEqual([3, 4, 5, 1]);
    expect(placeInMiddle([1, 6], [2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(placeInMiddle([], [2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
  });
});
