import { lowercaseKeys } from './lowercaseKeys';

describe('lowercaseKeys', () => {
  test('should convert all keys to lowercase', () => {
    expect(lowercaseKeys({ FOO: true }).foo).toBe(true);
    expect(lowercaseKeys({ FOO: true, bAr: true }).bar).toBe(true);
  });
});
