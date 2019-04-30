import { summable } from './summable';

describe('summable', () => {
  test('should implement summable as specified', () => {
    expect(summable({ target: 8, array: [4, 9, 4, 2] })).toBe(true);
    expect(summable({ target: 8, array: [4, 9, 3, 2] })).toBe(false);
    expect(summable({ target: 17, array: [4, 9, 6, 7, 4, 2] })).toBe(true);
    expect(summable({ target: 27, array: [4, 9, 6, 7, 4, 2] })).toBe(false);
    expect(summable({ target: 0, array: [] })).toBe(true);
    expect(summable({ target: 1, array: [] })).toBe(false);
  });
});
