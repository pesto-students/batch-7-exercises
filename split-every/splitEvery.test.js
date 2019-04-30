import { splitEvery } from './splitEvery';

describe('splitEvery', () => {
  it('splits a collection into slices of the specified length', () => {
    expect(splitEvery(1, [1, 2, 3, 4])).toEqual([[1], [2], [3], [4]]);
    expect(splitEvery(2, [1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    expect(splitEvery(3, [1, 2, 3, 4])).toEqual([[1, 2, 3], [4]]);
    expect(splitEvery(4, [1, 2, 3, 4])).toEqual([[1, 2, 3, 4]]);
    expect(splitEvery(5, [1, 2, 3, 4])).toEqual([[1, 2, 3, 4]]);
    expect(splitEvery(3, [])).toEqual([]);
    expect(splitEvery(1, 'abcd')).toEqual(['a', 'b', 'c', 'd']);
    expect(splitEvery(2, 'abcd')).toEqual(['ab', 'cd']);
    expect(splitEvery(3, 'abcd')).toEqual(['abc', 'd']);
    expect(splitEvery(4, 'abcd')).toEqual(['abcd']);
    expect(splitEvery(5, 'abcd')).toEqual(['abcd']);
    expect(splitEvery(3, '')).toEqual([]);
  });

  it('throws if first argument is not positive', () => {
    expect(() => { splitEvery(0, []); }).toThrow();
    expect(() => { splitEvery(0, ''); }).toThrow();
    expect(() => { splitEvery(-1, []); }).toThrow();
    expect(() => { splitEvery(-1, ''); }).toThrow();
  });
});
