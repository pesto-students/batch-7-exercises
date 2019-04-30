import { updateObject } from './updateObject';

describe('updateObject', () => {
  it('updates the value at the given index of the supplied array', () => {
    expect(updateObject(2, 4, [0, 1, 2, 3])).toEqual([0, 1, 4, 3]);
  });

  it('offsets negative indexes from the end of the array', () => {
    expect(updateObject(-3, 4, [0, 1, 2, 3])).toEqual([0, 4, 2, 3]);
  });

  it('returns the original array if the supplied index is out of bounds', () => {
    const list = [0, 1, 2, 3];
    expect(updateObject(4, 4, list)).toEqual(list);
    expect(updateObject(-5, 4, list)).toEqual(list);
  });

  it('does not mutate the original array', () => {
    const list = [0, 1, 2, 3];
    expect(updateObject(2, 4, list)).toEqual([0, 1, 4, 3]);
    expect(list).toEqual([0, 1, 2, 3]);
  });

  it('curries the arguments', () => {
    expect(updateObject(2)(4)([0, 1, 2, 3])).toEqual([0, 1, 4, 3]);
  });

  it('accepts an array-like object', () => {
    function args(..._args) {
      return _args;
    }
    expect(updateObject(2, 4, args(0, 1, 2, 3))).toEqual([0, 1, 4, 3]);
  });
});
