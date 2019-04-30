import { daysInMonth } from './daysInMonth';

describe('countDaysInMonth', () => {
  test('should return correct number of days', () => {
    expect(daysInMonth(2014, 4)).toBe(30);
    expect(daysInMonth(2016, 2)).toBe(29);
  });
});
