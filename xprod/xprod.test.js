import { xprod } from './xprod';

describe('xprod', () => {
  const a = [1, 2];
  const b = ['a', 'b', 'c'];

  it('returns an empty list if either input list is empty', () => {
    expect(xprod([], [1, 2, 3])).toEqual([]);
    expect(xprod([1, 2, 3], [])).toEqual([]);
  });

  it('creates the collection of all cross-product pairs of its parameters', () => {
    expect(xprod(a, b)).toEqual([[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c']]);
  });
});

