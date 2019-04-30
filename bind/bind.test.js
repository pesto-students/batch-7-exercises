import { bind } from './bind';

describe('bind', () => {
  function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
  }

  function firstNameFavoriteColor(favoriteColor) {
    return `${this.firstName}'s favorite color is ${favoriteColor}`;
  }

  const person = {
    firstName: 'Goku',
  };

  test('returns a function', () => {
    expect(typeof bind(firstNameFavoriteColor, person)).toBe('function');
  });

  test('is invoked with the value of the keyword this passed to the function', () => {
    let bindFn = bind(firstNameFavoriteColor, person);
    expect(bindFn('green')).toBe('Goku\'s favorite color is green');
    bindFn = bind(firstNameFavoriteColor, person, 'blue');
    expect(bindFn('green')).toBe('Goku\'s favorite color is blue');
  });

  test('is invoked with the remaining arguments from the outer function and inner function', () => {
    expect(bind(addFourNumbers, this, 1)(2, 3, 4)).toBe(10);
    expect(bind(addFourNumbers, this, 1, 2)(3, 4)).toBe(10);
    expect(bind(addFourNumbers, this, 1, 2, 3)(4)).toBe(10);
    expect(bind(addFourNumbers, this, 1, 2, 3, 4)()).toBe(10);
    expect(bind(addFourNumbers, this)(1, 2, 3, 4)).toBe(10);
    expect(bind(addFourNumbers, this)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(10);
  });
});
