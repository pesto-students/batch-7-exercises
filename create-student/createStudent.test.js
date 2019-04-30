import { createStudent } from './createStudent';

describe('createStudent', () => {
  test('returns a string with the first value and last value of an object with a destructured parameter', () => {
    expect(createStudent()).toBe('The student likes JavaScript and ES2015');
    expect(createStudent({
      likesES2015: false,
    })).toBe('The student likes JavaScript!');
    expect(createStudent({
      likesJavaScript: false,
    })).toBe('The student likes ES2015!');
    expect(createStudent({
      likesJavaScript: false,
      likesES2015: false,
    })).toBe('The student does not like much...');
  });
});
