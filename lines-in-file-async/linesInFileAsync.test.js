import path from 'path';
import { linesInFileAsync } from './linesInFileAsync';

describe('linesInFileAsync', () => {
  test('should return number of lines in a file when path to it is given', async () => {
    const actual = await linesInFileAsync(path.join(__dirname, 'file.txt'));
    expect(actual).toBe(41);
  });
});
