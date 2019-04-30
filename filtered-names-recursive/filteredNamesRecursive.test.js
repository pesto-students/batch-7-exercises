import path from 'path';
import { filteredNamesRecursive } from './filteredNamesRecursive';


describe('filteredLsRecursive', () => {
  test('should return array of files in directory filtered by given extension', () => {
    const expected = [
      'a.json',
      'b.json',
      'e.json',
      'f.json',
    ];
    const actual = filteredNamesRecursive(path.join(__dirname, 'Directory'), 'json');
    expect(actual.sort()).toEqual(expected);
  });
});
