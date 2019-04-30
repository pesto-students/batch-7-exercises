import { isomorphic } from './isomorphic';

describe('5 Isomorphic Strings', () => {
  test('should correctly check for isomorphic strings', () => {
    expect(isomorphic(['egg', 'add'])).toBe(true);
    expect(isomorphic(['foo', 'bar'])).toBe(false);
    expect(isomorphic(['asdfghjkl', 'qwertyuio'])).toBe(true);
    expect(isomorphic(['asdfgsjkl', 'qwertyuio'])).toBe(false);
    expect(isomorphic(['better', 'fetter'])).toBe(true);
    expect(isomorphic(['less', 'fast'])).toBe(false);
    expect(isomorphic(['it', 'odd'])).toBe(false);
  });
});
