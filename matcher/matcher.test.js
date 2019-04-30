import { matcher } from './matcher';

describe('matcher', () => {
  test('matcher()', () => {
    expect(matcher(['foo', 'bar'], ['foo'])).toEqual(['foo']);
    expect(matcher(['foo', 'bar'], ['bar'])).toEqual(['bar']);
    expect(matcher(['foo', 'bar'], ['fo*', 'ba*', '!bar'])).toEqual(['foo']);
    expect(matcher(['foo', 'bar', 'moo'], ['!*o'])).toEqual(['bar']);
    expect(matcher(['moo', 'MOO'], ['*oo'], { caseSensitive: true })).toEqual(['moo']);
    expect(matcher(['moo', 'MOO'], ['*oo'], { caseSensitive: false })).toEqual(['moo', 'MOO']);
    expect(() => matcher([], [])).not.toThrow();
  });

  test('matcher.isMatch()', () => {
    expect(matcher.isMatch('unicorn', 'unicorn')).toBe(true);
    expect(matcher.isMatch('MOO', 'MOO')).toBe(true);
    expect(matcher.isMatch('unicorn', 'uni*')).toBe(true);
    expect(matcher.isMatch('UNICORN', 'unicorn', { caseSensitive: false })).toBe(true);
    expect(matcher.isMatch('unicorn', '*corn')).toBe(true);
    expect(matcher.isMatch('unicorn', 'un*rn')).toBe(true);
    expect(matcher.isMatch('foo unicorn bar', '*unicorn*')).toBe(true);
    expect(matcher.isMatch('unicorn', '*')).toBe(true);
    expect(matcher.isMatch('UNICORN', 'UNI*', { caseSensitive: true })).toBe(true);
    expect(matcher.isMatch('UNICORN', 'unicorn', { caseSensitive: true })).toBe(false);
    expect(matcher.isMatch('unicorn', '')).toBe(false);
    expect(matcher.isMatch('unicorn', '!unicorn')).toBe(false);
    expect(matcher.isMatch('unicorn', '!uni*')).toBe(false);
    expect(matcher.isMatch('unicorn', 'uni\\*')).toBe(false);
    expect(matcher.isMatch('unicorn', '!tricorn')).toBe(true);
    expect(matcher.isMatch('unicorn', '!tri*')).toBe(true);
  });
});
