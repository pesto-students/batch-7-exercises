import { isOdd } from './isOdd';

describe('isOdd', () => {
  it('should return true if odd number is sent as argument', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(41)).toBe(true);
  });

  it('should return false if even number is sent as argument', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(24)).toBe(false);
  });
});
