import { doubleOddNumbers } from './doubleOddNumbers';

describe('doubleOddNumbers', () => {
  test('returns a new array of all odd numbers doubled', () => {
    expect(doubleOddNumbers([1, 2, 3, 4, 5])).toEqual([2, 6, 10]);
  });
});
