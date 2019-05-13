import { objectKeys } from './objectKeys';

describe('objectKeys', () => {
  it('should return an array', () => {
    const obj = {
      hi: 'hi',
    };
    const result = objectKeys(obj);
    expect(Array.isArray(result)).toBe(true);
  });
  it('should return an array of strings that correspond with the object\'s properties', () => {
    const obj = {
      hi: 'hi',
      there: 'there',
      JSFOREVER: null,
    };
    const result = objectKeys(obj);
    expect(result).toEqual(['hi', 'there', 'JSFOREVER']);
  });
});
