import { tiles } from './tiles';

describe('tiles', () => {
  test('should implement tiles correctly', () => {
    expect(tiles({ small: 4, big: 3, target: 12 })).toBe(true);
    expect(tiles({ small: 2, big: 3, target: 18 })).toBe(false);
    expect(tiles({ small: 8, big: 4, target: 26 })).toBe(true);
    expect(tiles({ small: 3, big: 3, target: 14 })).toBe(false);
  });
});
