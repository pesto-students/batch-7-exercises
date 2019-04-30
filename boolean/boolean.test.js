import { boolean } from './boolean';

describe('check for boolean', () => {
  test('should return a boolean', () => {
    expect(typeof boolean(true)).toBe('boolean');
    expect(boolean('')).toBe(false);
  });
});
