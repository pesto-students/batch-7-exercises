import { corneredString } from './corneredString';

describe('corneredString', () => {
  it('should space the string properly', () => {
    expect(corneredString('yolo')).toBe(
      'Y O L O\n\nO\n\nL\n\nO'
    );
  });

  it('should not error on empty string', () => {
    expect(corneredString('')).toBe('');
  });

  it('should handle larger strings', () => {
    expect(corneredString('wonderful')).toBe(
      'W O N D E R F U L\n\nO\n\nN\n\nD\n\nE\n\nR\n\nF\n\nU\n\nL',
    );
  });

  it('should handle tiny strings', () => {
    expect(corneredString('a')).toBe('A');
  });
});
