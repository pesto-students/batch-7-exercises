import { bouncer } from './bouncer';

describe('bouncer', () => {
  test('should remove all falsy values from an array.', () => {
    expect(bouncer([7, 'ate', '', false, 9])).toEqual([7, 'ate', 9]);
    expect(bouncer(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(bouncer([false, null, 0, NaN, undefined, ''])).toEqual([]);
    expect(bouncer([1, null, NaN, 2, undefined])).toEqual([1, 2]);
  });
});
