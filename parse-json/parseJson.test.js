import { parseJson } from './parseJson';

test('1', () => {
  expect(!!parseJson('{"foo": true}')).toBe(true);
});

test('2', () => {
  expect(() => {
    parseJson('{\n\t"foo": true,\n}');
  }).toThrowError(/Unexpected token }/);
});

test('3', () => {
  expect(() => {
    try {
      parseJson('{\n\t"foo": true,\n}');
    } catch (err) {
      err.fileName = 'foo.json';
      throw err;
    }
  }).toThrowError(/Unexpected token }.*in foo\.json?/);
});

test('4', () => {
  expect(() => {
    parseJson('{\n\t"foo": true,\n}', 'foo.json');
  }).toThrowError(/Unexpected token }.*in foo\.json?/);
});

test('5', () => {
  expect(() => {
    try {
      parseJson('{\n\t"foo": true,\n}', 'bar.json');
    } catch (err) {
      err.fileName = 'foo.json';
      throw err;
    }
  }).toThrowError(/Unexpected token }.*in foo\.json?/);
});
