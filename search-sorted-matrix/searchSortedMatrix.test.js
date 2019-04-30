import { searchSortedMatrix } from './searchSortedMatrix';

describe('searchSortedMatrix', () => {
  test('should implement the function correctly', () => {
    expect(searchSortedMatrix({
      search: 18,
      matrix: [
        [12, 18, 34, 35],
        [38, 50, 52, 70],
        [82, 84, 90, 95],
      ],
    })).toBe(true);
    expect(searchSortedMatrix({
      search: 41,
      matrix: [[12, 18, 34, 35, 41, 44]],
    })).toBe(true);
    expect(searchSortedMatrix({
      search: 40,
      matrix: [[12, 18, 34, 35, 41, 44]],
    })).toBe(false);
    expect(searchSortedMatrix({
      search: 54,
      matrix: [[1, 2, 3, 4, 5, 6, 9, 10],
        [12, 14, 15, 17, 18, 20, 22, 23],
        [24, 25, 26, 27, 28, 34, 35, 36],
        [37, 42, 43, 44, 45, 46, 48, 49],
        [50, 51, 52, 56, 61, 62, 63, 64],
        [65, 69, 70, 75, 76, 80, 81, 82],
        [83, 84, 90, 82, 84, 90, 95, 96]],
    })).toBe(false);
    expect(searchSortedMatrix({
      search: 80,
      matrix: [[1, 2, 3, 4, 5, 6, 9, 10],
        [12, 14, 15, 17, 18, 20, 22, 23],
        [24, 25, 26, 27, 28, 34, 35, 36],
        [37, 42, 43, 44, 45, 46, 48, 49],
        [50, 51, 52, 56, 61, 62, 63, 64],
        [65, 69, 70, 75, 76, 80, 81, 82],
        [83, 84, 90, 82, 84, 90, 95, 96]],
    })).toBe(true);
  });
});
