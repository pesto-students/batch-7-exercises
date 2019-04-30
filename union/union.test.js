import { union } from './union';

describe('union', () => {
  const M = [1, 2, 3, 4];
  const N = [3, 4, 5, 6];
  it('combines two lists into the set of all their elements', () => {
    expect(union(M, N)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('combines two lists with various elements', () => {
    expect(union([0], [-0]).length).toEqual(2);
    expect(union([-0], [0]).length).toEqual(2);
    expect(union([NaN], [NaN]).length).toEqual(1);
  });
});
