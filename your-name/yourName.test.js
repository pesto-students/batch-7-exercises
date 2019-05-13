import { yourName } from './yourName';

describe('Write your name in the test', () => {
  test('yourName should return my name', () => {
    expect(yourName()).toBe('Amit');
  });
});
