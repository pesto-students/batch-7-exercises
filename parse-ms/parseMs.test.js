import { parseMs } from './parseMs';

describe('parseMs', () => {
  it('should parse milliseconds into an object', () => {
    expect(parseMs(1000 + 400)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 1,
      milliseconds: 400,
    });

    expect(parseMs(1000 * 55)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 55,
      milliseconds: 0,
    });

    expect(parseMs(1000 * 67)).toEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 7,
      milliseconds: 0,
    });

    expect(parseMs(1000 * 60 * 5)).toEqual({
      days: 0,
      hours: 0,
      minutes: 5,
      seconds: 0,
      milliseconds: 0,
    });

    expect(parseMs(1000 * 60 * 67)).toEqual({
      days: 0,
      hours: 1,
      minutes: 7,
      seconds: 0,
      milliseconds: 0,
    });

    expect(parseMs(1000 * 60 * 60 * 12)).toEqual({
      days: 0,
      hours: 12,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });

    expect(parseMs(1000 * 60 * 60 * 40)).toEqual({
      days: 1,
      hours: 16,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });

    expect(parseMs(1000 * 60 * 60 * 999)).toEqual({
      days: 41,
      hours: 15,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  });

  it('should handle negative millisecond values', () => {
    [
      100 + 400,
      1000 * 55,
      1000 * 67,
      1000 * 60 * 5,
      1000 * 60 * 67,
      1000 * 60 * 60 * 12,
      1000 * 60 * 60 * 40,
      1000 * 60 * 60 * 999,
    ].forEach((ms) => {
      const positive = parseMs(ms);
      const negative = parseMs(-ms);
      [
        'days',
        'hours',
        'minutes',
        'seconds',
        'milliseconds',
      ].forEach((key) => {
        expect(negative[key]).toBe(-positive[key]);
      });
    });
  });
});
