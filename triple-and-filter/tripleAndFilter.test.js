import { tripleAndFilter } from './tripleAndFilter';

describe('myName', () => {
  describe('tripleAndFilter', () => {
    test('triples an array of numbers and returns an array of all those numbers divisible by 5', () => {
      expect(tripleAndFilter([1, 2, 3, 4, 5])).toEqual([15]);
    });
  });
});
