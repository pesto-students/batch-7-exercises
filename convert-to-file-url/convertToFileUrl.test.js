import { convertToFileUrl } from './convertToFileUrl';

describe('convertToFileUrl', () => {
  test('converts path to file url', () => {
    expect(convertToFileUrl('test.jpg')).toMatch(/file:\/\/\/.*\/test\.jpg/);

    if (process.platform === 'win32') {
      expect(convertToFileUrl('C:\\Users\\pesto\\dev\\te^st.jpg'))
        .toBe('file:///C:/Users/pesto/dev/te%5Est.jpg');
    } else {
      expect(convertToFileUrl('/Users/pesto/dev/te^st.jpg'))
        .toBe('file:///Users/pesto/dev/te%5Est.jpg');
    }
  });

  test('escapes reserved characters in path', () => {
    expect(convertToFileUrl('Bad?/A#1.jpg')).toMatch(/^file:\/\/\/.*\/Bad%3F\/A%231\.jpg$/);
  });
});
