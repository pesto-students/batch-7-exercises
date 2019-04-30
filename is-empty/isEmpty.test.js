import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  it('returns false for null', () => {
    expect(isEmpty(null)).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isEmpty(undefined)).toBe(false);
  });

  it('returns true for empty string', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(' ')).toBe(false);
  });

  it('returns true for empty array', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([[]])).toBe(false);
  });

  it('returns true for empty object', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ x: 0 })).toBe(false);
  });

  it('returns true for empty arguments object', () => {
    expect(isEmpty(((...args) => args)())).toBe(true);
    expect(isEmpty(((...args) => args)(0))).toBe(false);
  });

  it('returns false for every other value', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(NaN)).toBe(false);
    expect(isEmpty([''])).toBe(false);
  });
});
