import { slugUrl } from './slugUrl';

describe('slugUrl', () => {
  test('main', () => {
    expect(slugUrl('Foo Bar')).toBe('foo-bar');
    expect(slugUrl('foo bar baz')).toBe('foo-bar-baz');
    expect(slugUrl('foo bar ')).toBe('foo-bar');
    expect(slugUrl('       foo bar')).toBe('foo-bar');
    expect(slugUrl('[foo] [bar]')).toBe('foo-bar');
    expect(slugUrl('Foo ÿ')).toBe('foo-y');
    expect(slugUrl('FooBar')).toBe('foo-bar');
    expect(slugUrl('fooBar')).toBe('foo-bar');
    expect(slugUrl('UNICORNS AND RAINBOWS')).toBe('unicorns-and-rainbows');
    expect(slugUrl('Foo & Bar')).toBe('foo-and-bar');
    expect(slugUrl('Foo & Bar')).toBe('foo-and-bar');
    expect(slugUrl('Foo Bar2')).toBe('foo-bar2');
    expect(slugUrl('fooBar 123 $#%')).toBe('foo-bar-123');
    expect(slugUrl('foo&bar')).toBe('foo-and-bar');
  });

  test('custom separator', () => {
    expect(slugUrl('foo bar', { separator: '_' })).toBe('foo_bar');
    expect(slugUrl('BAR&baz', { separator: '_' })).toBe('bar_and_baz');
    expect(slugUrl('UNICORNS AND RAINBOWS!', { separator: '@' })).toBe('unicorns@and@rainbows');
    expect(slugUrl('[foo] [bar]', { separator: '.' })).toBe('foo.bar', 'escape regexp special characters');
  });
});
