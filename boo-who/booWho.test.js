import { booWho } from './booWho';

describe('booWho', () => {
  test('should return the correct expected output', () => {
    expect(booWho(true)).toBe(true);
    expect(booWho(false)).toBe(true);
    expect(booWho([1, 2, 3])).toBe(false);
    expect(booWho(NaN)).toBe(false);
    expect(booWho('a')).toBe(false);
    expect(booWho('true')).toBe(false);
  });
});
