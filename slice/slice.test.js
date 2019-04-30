import { slice } from './slice';

describe('slice', () => {
  it('retrieves the proper sublist of a list', () => {
    const list = [8, 6, 7, 5, 3, 0, 9];
    expect(slice(2, 5, list)).toEqual([7, 5, 3]);
  });

  it('can operate on strings', () => {
    expect(slice(0, 0, 'abc')).toBe('');
    expect(slice(0, 1, 'abc')).toBe('a');
    expect(slice(0, 2, 'abc')).toBe('ab');
    expect(slice(0, 3, 'abc')).toBe('abc');
    expect(slice(0, 4, 'abc')).toBe('abc');
    expect(slice(1, 0, 'abc')).toBe('');
    expect(slice(1, 1, 'abc')).toBe('');
    expect(slice(1, 2, 'abc')).toBe('b');
    expect(slice(1, 3, 'abc')).toBe('bc');
    expect(slice(1, 4, 'abc')).toBe('bc');
    expect(slice(0, -4, 'abc')).toBe('');
    expect(slice(0, -3, 'abc')).toBe('');
    expect(slice(0, -2, 'abc')).toBe('a');
    expect(slice(0, -1, 'abc')).toBe('ab');
    expect(slice(0, -0, 'abc')).toBe('');
    expect(slice(-2, -4, 'abc')).toBe('');
    expect(slice(-2, -3, 'abc')).toBe('');
    expect(slice(-2, -2, 'abc')).toBe('');
    expect(slice(-2, -1, 'abc')).toBe('b');
    expect(slice(-2, -0, 'abc')).toBe('');
  });
});
