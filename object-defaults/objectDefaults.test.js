import { objectDefaults } from './objectDefaults';

describe('objectDefaults', () => {
  it('should return an object', () => {
    const obj = {
      hi: 'hi',
    };
    const result = objectDefaults(obj, {});
    expect(Array.isArray(result)).toBe(false);
    expect(typeof result).toBe('object');
  });
  it('should return an object where defaults have been filled in', () => {
    const obj = {
      x: 'hi',
    };
    const defaultObj = {
      banana: true,
      bubblegum: false,
    };
    const result = objectDefaults(obj, defaultObj);
    expect(result).toEqual({ x: 'hi', banana: true, bubblegum: false });
  });
  it('should not overwrite existing defined properties with defaults', () => {
    const obj = {
      x: 'hi',
    };
    const defaultObj = {
      banana: true,
      x: false,
    };
    const result = objectDefaults(obj, defaultObj);
    expect(result).toEqual({ x: 'hi', banana: true });
  });
});
