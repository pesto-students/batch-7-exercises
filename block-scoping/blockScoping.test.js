import { blockScoping } from './blockScoping';

describe('blockScoping', () => {
  test('should return the number (range: 0 - 10) sent as argument to function', () => {
    expect(blockScoping(5)).toBe(5);
    expect(blockScoping(2)).toBe(2);
    expect(blockScoping(10)).toBe(10);
  });
});
