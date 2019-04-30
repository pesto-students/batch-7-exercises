import { theatre } from './theatre';

describe('theatre', () => {
  test('should implement theatre correctly', () => {
    expect(theatre([10, 10, 20, 10, 10, 10, 50, 10, 20, 50, 10, 20])).toBe(true);
    expect(theatre([10, 10, 20, 10, 10, 10, 50, 50, 10, 20])).toBe(false);
    expect(theatre([10, 10, 20, 10, 10, 10, 20, 20, 20, 20])).toBe(true);
    expect(theatre([10, 10, 10, 20, 10, 10, 50, 10, 20, 10, 20, 20, 20, 10, 50, 20,
      10, 10, 10, 20, 20, 50, 20])).toBe(true);
    expect(theatre([10, 10, 10, 20, 10, 10, 50, 20, 10, 20, 20, 20, 10, 50, 20, 10,
      10, 10, 20, 20, 50, 10, 20])).toBe(false);
  });
});
