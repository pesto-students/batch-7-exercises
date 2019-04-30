import { objectValues } from './objectValues';

describe('objectValues', () => {
  it('should return an array', () => {
    const obj = {
      hi: 'hi',
    };
    const result = objectValues(obj);
    expect(Array.isArray(result)).toBe(true);
  });
  it('should return an array of strings that correspond with the object\'s values', () => {
    const obj = {
      hi: 'hi',
      there: 'there',
      JSFOREVER: null,
    };
    const result = objectValues(obj);
    expect(result).toEqual(['hi', 'there', null]);
  });
});
