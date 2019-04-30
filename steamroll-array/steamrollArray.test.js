import { steamrollArray } from './steamrollArray';

describe('steamrollArray', () => {
  test('should return the correct output', () => {
    expect(steamrollArray([[['a']], [['b']]])).toEqual(['a', 'b']);
    expect(steamrollArray([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
    expect(steamrollArray([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
    expect(steamrollArray([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
  });
});
