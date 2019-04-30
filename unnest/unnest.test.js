import { unnest } from './unnest';

describe('unnest', () => {
  it('only flattens one layer deep of a nested list', () => {
    let nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
    expect(unnest(nest)).toEqual([1, 2, 3, [4, 5], 6, [[[7], 8]], 9, 10]);
    nest = [[[[3]], 2, 1], 0, [[-1, -2], -3]];
    expect(unnest(nest)).toEqual([[[3]], 2, 1, 0, [-1, -2], -3]);
    expect(unnest([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('is not destructive', () => {
    const nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10];
    expect(unnest(nest)).not.toEqual(nest);
  });

  it('handles array-like objects', () => {
    const o = {
      length: 3, 0: [1, 2, [3]], 1: [], 2: ['a', 'b', 'c', ['d', 'e']],
    };
    expect(unnest(o)).toEqual([1, 2, [3], 'a', 'b', 'c', ['d', 'e']]);
  });

  it('flattens an array of empty arrays', () => {
    expect(unnest([[], [], []])).toEqual([]);
    expect(unnest([])).toEqual([]);
  });
});
