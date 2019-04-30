import { splitLines } from './splitLines';

describe('splitLines', () => {
  test('split lines', () => {
    expect(splitLines('foo\r\nbar\r\nbaz\nrainbow'))
      .toEqual(['foo', 'bar', 'baz', 'rainbow']);
  });

  test('preserveNewlines option', () => {
    expect(splitLines('foo\r\nbar\r\nbaz\nrainbow', { preserveNewlines: true }))
      .toEqual(['foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']);

    expect(splitLines('\nfoo\r\nbar\r\nbaz\nrainbow', { preserveNewlines: true }))
      .toEqual(['\n', 'foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']);

    expect(splitLines('\nfoo\r\nbar\r\nbaz\nrainbow\n', { preserveNewlines: true }))
      .toEqual(['\n', 'foo\r\n', 'bar\r\n', 'baz\n', 'rainbow\n', '']);
  });
});
