import { uniq } from './uniq';

describe('uniq', () => {
  it('returns a set from any array (i.e. purges duplicate elements)', () => {
    const list = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    expect(uniq(list)).toEqual([1, 2, 3]);
  });

  it('keeps elements from the left', () => {
    expect(uniq([1, 2, 3, 4, 1])).toEqual([1, 2, 3, 4]);
  });

  it('returns an empty array for an empty array', () => {
    expect(uniq([])).toEqual([]);
  });

  it('checking length', () => {
    expect(uniq([-0, -0]).length).toBe(1);
    expect(uniq([0, -0]).length).toBe(2);
    expect(uniq([NaN, NaN]).length).toBe(1);
    expect(uniq([[1], [1]]).length).toBe(1);
  });

  it('handles null and undefined elements', () => {
    expect(uniq([undefined, null, undefined, null])).toEqual([undefined, null]);
  });
});
