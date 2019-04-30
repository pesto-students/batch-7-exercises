import { nthArg } from './nthArg';

describe('nthArg', () => {
  it('returns a function which returns its nth argument', () => {
    expect(nthArg(0)('foo', 'bar')).toBe('foo');
    expect(nthArg(1)('foo', 'bar')).toBe('bar');
  });

  it('accepts negative offsets', () => {
    expect(nthArg(-1)('foo', 'bar')).toBe('bar');
    expect(nthArg(-2)('foo', 'bar')).toBe('foo');
    expect(nthArg(-3)('foo', 'bar')).toBe(undefined);
  });

  it('returns a function with length n + 1 when n >= 0', () => {
    expect(nthArg(0).length).toBe(1);
    expect(nthArg(1).length).toBe(2);
    expect(nthArg(2).length).toBe(3);
    expect(nthArg(3).length).toBe(4);
  });

  it('returns a function with length 1 when n < 0', () => {
    expect(nthArg(-1).length).toBe(1);
    expect(nthArg(-2).length).toBe(1);
    expect(nthArg(-3).length).toBe(1);
  });

  it('returns a curried function', () => {
    expect(nthArg(1)('foo', 'bar')).toEqual(nthArg(1)('foo')('bar'));
    expect(nthArg(2)('foo', 'bar', 'baz')).toEqual(nthArg(2)('foo')('bar')('baz'));
  });
});
