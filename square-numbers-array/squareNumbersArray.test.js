import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => squareNumbersArray(...myArray)).toThrow('My custom error');
  });
  test('should return square array', () => {
    const myArray = [1, 3, 2, 6];
    const result = [1, 9, 4, 36];
    expect(squareNumbersArray(...myArray)).toEqual(result);
  });
});
