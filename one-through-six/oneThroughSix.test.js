import { oneThroughSix } from './oneThroughSix';

describe('4 Implementing formula one through six', () => {
  test('should return correct string with formula', () => {
    expect(oneThroughSix(31)).toBe('1 + 23 - 4 + 5 + 6');
    expect(oneThroughSix(71)).toBe('123 + 4 - 56');
    expect(oneThroughSix(-61)).toBe('1 - 23 - 45 + 6');
    expect(oneThroughSix(123456)).toBe('123456');
  });
});
