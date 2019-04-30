import path from 'path';
import { csvToJson } from './csvToJson';

const csvFile = path.join(__dirname, 'avengers.csv');

const fixture = [{
  name: 'Steve Rogers',
  superheroName: 'Captain America',
  power: 'Superhuman strength and combat skill',
}, {
  name: 'Tony Stark',
  superheroName: 'Ironman',
  power: 'Brains and money',
}, {
  name: 'Bruce Banner',
  superheroName: 'Hulk',
  power: 'Monster within',
}, {
  name: 'Peter Parker',
  superheroName: 'Spiderman',
  power: 'Spidey sense',
}];

describe('csvToJson', () => {
  test('should convert csv to json', async () => {
    const actual = await csvToJson(csvFile);
    expect(actual).toEqual(fixture);
  });
});
