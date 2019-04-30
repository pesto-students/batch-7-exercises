import { errorName } from './throwErrors';

describe('throwing errors', () => {
  test('throw a reference error correctly', () => {
    expect(errorName).toBe('ReferenceError');
  });
});
