import { unusedFilename } from './unusedFilename';

describe('unusedFilename', () => {
  test('async', async () => {
    expect(await unusedFilename('fixtures/newFile.txt')).toBe('fixtures/newFile.txt');
    expect(await unusedFilename('fixtures/file.txt')).toBe('fixtures/file (2).txt');
  });

  test('sync', () => {
    expect(unusedFilename.sync('fixtures/newFile.txt')).toBe('fixtures/newFile.txt');
    expect(unusedFilename.sync('fixtures/file.txt')).toBe('fixtures/file (1).txt');
  });
});
