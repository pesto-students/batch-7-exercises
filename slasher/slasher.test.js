import { slasher } from './slasher';

describe('slasher', () => {
  test('should return the correct output', () => {
    expect(slasher([1, 2, 3], 2)).toEqual([3]);
    expect(slasher([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(slasher([1, 2, 3], 9)).toEqual([]);
    expect(slasher(['burgers', 'fries', 'shake'], 1)).toEqual(['fries', 'shake']);
    expect(slasher([1, 2, 'chicken', 3, 'potatoes', 'cheese', 4], 5)).toEqual(['cheese', 4]);
  });
});
