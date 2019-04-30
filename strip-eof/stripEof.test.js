import { stripEof } from './stripEof';

describe('stripEof', () => {
  test('string', () => {
    expect(stripEof('foo\n')).toBe('foo');
    expect(stripEof('foo\nbar\n')).toBe('foo\nbar');
    expect(stripEof('foo\n\n\n')).toBe('foo\n\n');
    expect(stripEof('foo\r\n')).toBe('foo');
    expect(stripEof('foo\r')).toBe('foo');
    expect(stripEof('foo\n\r\n')).toBe('foo\n');
  });

  test('buffer', () => {
    expect(stripEof(Buffer.from('foo\n')).toString()).toBe('foo');
    expect(stripEof(Buffer.from('foo\nbar\n')).toString()).toBe('foo\nbar');
    expect(stripEof(Buffer.from('foo\n\n\n').toString())).toBe('foo\n\n');
    expect(stripEof(Buffer.from('foo\r\n')).toString()).toBe('foo');
    expect(stripEof(Buffer.from('foo\r')).toString()).toBe('foo');
    expect(stripEof(Buffer.from('foo\n\r\n')).toString()).toBe('foo\n');
  });
});
