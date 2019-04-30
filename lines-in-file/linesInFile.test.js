import path from 'path';
import { linesInFile } from './linesInFile';

describe('linesInFile', () => {
  test('should return number of lines in a file when path to it is given', () => {
    expect(linesInFile(path.join(__dirname, 'file.txt'))).toBe(41);
  });
});
