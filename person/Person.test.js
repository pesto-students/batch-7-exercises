import { Person } from './Person';

describe('Person', () => {
  test('should be a class with name = Person', () => {
    expect(/\b\s?class Person\s?{/gm.test(Person.toString())).toBe(true);
  });

  test('should create an object with firstName, lastName, dateOfBirth when called with new keyword', () => {
    const nishant = new Person('Nishant', 'Salhotra', '5/11/1994');
    expect(nishant).toEqual({
      firstName: 'Nishant',
      lastName: 'Salhotra',
      dateOfBirth: '5/11/1994',
    });
  });

  test('should have a method to add the digits in date of birth', () => {
    const nishant = new Person('Nishant', 'Salhotra', '5/11/1994');
    expect(nishant.addDobDigits()).toBe(30);
  });
});
