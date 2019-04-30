import { roundTo } from './roundTo';

describe('roundTo', () => {
  test('roundTo()', () => {
    expect(roundTo(0.129, 3)).toBe(0.129);
    expect(roundTo(0.129, 2)).toBe(0.13);
    expect(roundTo(0.129, 1)).toBe(0.1);
    expect(roundTo(1.005, 2)).toBe(1.01);
    expect(roundTo(1.005, 0)).toBe(1);
    expect(roundTo(111.1, -2)).toBe(100);
    expect(roundTo(-0.375, 2)).toBe(-0.38);
    expect(Number.isNaN(roundTo(10000000000000, 8))).toBe(false);
    expect(roundTo(0.37542323423423432432432432432, 8)).toBe(0.37542323);
  });

  test('roundTo.up()', () => {
    expect(roundTo.up(0.111, 3)).toBe(0.111);
    expect(roundTo.up(0.111, 2)).toBe(0.12);
    expect(roundTo.up(0.111, 1)).toBe(0.2);
    expect(roundTo.up(1.004, 2)).toBe(1.01);
    expect(roundTo.up(1.111, 0)).toBe(2);
    expect(roundTo.up(111.1, -2)).toBe(200);
    expect(roundTo.up(-0.375, 2)).toBe(-0.37);
  });

  test('roundTo.down()', () => {
    expect(roundTo.down(0.666, 3)).toBe(0.666);
    expect(roundTo.down(0.666, 2)).toBe(0.66);
    expect(roundTo.down(0.666, 1)).toBe(0.6);
    expect(roundTo.down(1.006, 2)).toBe(1.00);
    expect(roundTo.down(1.006, 0)).toBe(1);
    expect(roundTo.down(111.6, -2)).toBe(100);
    expect(roundTo.down(-0.375, 2)).toBe(-0.38);
  });
});
