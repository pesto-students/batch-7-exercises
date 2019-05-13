import { mapObject } from './mapObject';

describe('mapObject', () => {
  it('should return an object', () => {
    const obj = {
      hi: 'hi',
    };
    const result = mapObject(obj, () => (null));
    expect(Array.isArray(result)).toBe(false);
    expect(typeof result).toBe('object');
  });
  it('should return an object with all of its values properly mapped', () => {
    const obj = {
      x: 2,
      y: 5,
      z: 10,
    };
    const result = mapObject(obj, n => (n * n));
    expect(result).toEqual({ x: 4, y: 25, z: 100 });
  });
});
