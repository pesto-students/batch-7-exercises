import { uniqueRandom } from './uniqueRandom';

describe('uniqueRandom', () => {
  test('should return a function that creates unique random numbers', () => {
    const uniqueRandom10 = uniqueRandom(1, 10);
    let count = 1000;
    let current;
    let prev;

    while (--count > 0) { // eslint-disable-line no-plusplus
      current = uniqueRandom10();

      if (current === prev || current > 10 || current < 1) {
        expect(true).toBe(false);
      }

      prev = current;
    }

    expect(true).toBe(true);
  });
});
