import { throwErrors } from './throwErrors';

describe('throwing errors', () => {
  test('throw a reference error correctly', () => {
    expect(throwErrors).toBe('ReferenceError');
  });
});
