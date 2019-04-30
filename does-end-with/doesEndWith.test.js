import { doesEndWith } from './doesEndWith';


describe('doesEndWith', () => {
  it('should return true when a string ends with the provided value', () => {
    expect(doesEndWith('c', 'abc')).toBe(true);
  });

  it('should return true when a long string ends with the provided value', () => {
    expect(doesEndWith('ology', 'astrology')).toBe(true);
  });

  it('should return false when a string does not end with the provided value', () => {
    expect(doesEndWith('b', 'abc')).toBe(false);
  });

  it('should return false when a long string does not end with the provided value', () => {
    expect(doesEndWith('olog', 'astrology')).toBe(false);
  });

  it('should return true when an array ends with the provided value', () => {
    expect(doesEndWith(['c'], ['a', 'b', 'c'])).toBe(true);
  });

  it('should return true when an array ends with the provided values', () => {
    expect(doesEndWith(['b', 'c'], ['a', 'b', 'c'])).toBe(true);
  });

  it('should return false when an array does not end with the provided value', () => {
    expect(doesEndWith(['b'], ['a', 'b', 'c'])).toBe(false);
  });

  it('should return false when an array does not end with the provided values', () => {
    expect(doesEndWith(['a', 'b'], ['a', 'b', 'c'])).toBe(false);
  });
});
