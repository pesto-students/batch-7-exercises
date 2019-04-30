import path from 'path';
import { filteredNames } from './filteredNames';


describe('filteredLs', () => {
  test('should return array of files in directory filtered by given extension', () => {
    const expected = [
      'a.json',
      'b.json',
    ];
    const actual = filteredNames(path.join(__dirname, 'Directory'), 'json');
    expect(actual.sort()).toEqual(expected);
  });
});
