import { printFullName } from './printFullName';

describe('printFullName', () => {
  test('returns a string with the first value and last value of an object with a destructured parameter', () => {
    const obj = {
      first: 'Tony',
      last: 'Stark',
    };
    expect(printFullName(obj)).toBe('My name is Tony Stark');
  });
});
