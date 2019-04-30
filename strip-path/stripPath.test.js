import path from 'path';
import { stripPath } from './stripPath';

describe('stripPath', () => {
  test('should strip path from a directory path and trim it', () => {
    expect(stripPath('path1/path2/../path2', 'path1')).toBe('path2');
  });

  test('should strip path from a deep directory path and trim it', () => {
    expect(stripPath('path1/path2/path3/path4', 'path1/path2')).toBe(path.normalize('path3/path4'));
  });

  test('should strip path from a file path and trim it', () => {
    expect(stripPath('path1/file.ext', 'path1')).toBe('file.ext');
  });

  test('should strip path from a deep file path and trim it', () => {
    expect(stripPath('path1/path2/path3/path4/file.ext', 'path1/path2/..')).toBe(path.normalize('path2/path3/path4/file.ext'));
  });

  test('should return the path when no strip arg', () => {
    expect(stripPath('path1/path2', null)).toBe(path.normalize('path1/path2'));
  });
});
