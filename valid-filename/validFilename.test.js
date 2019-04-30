import { validFilename } from './validFilename';

describe('validFilename', () => {
  test('should return correct boolean result for validity of filename', () => {
    expect(validFilename('foo-bar')).toBe(true);
    expect(validFilename('foo/bar')).toBe(false);
    expect(validFilename('')).toBe(false);
    expect(validFilename('<foo|bar>')).toBe(false);
    expect(validFilename('con')).toBe(false);
    expect(validFilename('aux')).toBe(false);
    expect(validFilename('com1')).toBe(false);
    expect(validFilename('lpt1')).toBe(false);
    expect(validFilename('nul1')).toBe(true);
    expect(validFilename('aux1')).toBe(true);
    expect(validFilename('a'.repeat(255))).toBe(true);
    expect(validFilename('a'.repeat(256))).toBe(false);
    expect(validFilename('.')).toBe(false);
    expect(validFilename('..')).toBe(false);
    expect(validFilename('...')).toBe(true);
  });
});
