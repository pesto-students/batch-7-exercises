import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(squareNumbersArray(myArray)).toThrow();
  });
  test('should return square array', () => {
    const myArray = [1, 2, 3, 4];
    expect(squareNumbersArray(myArray)).toEqual([1, 4, 9, 16]);
  });
});
