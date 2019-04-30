import { greet } from './greet';

describe('greet', () => {
  test('The function should return a Promise', () => {
    expect(greet() instanceof Promise).toBe(true);
  });
  test('Promise resolve value', () => expect(greet('Pesto')).resolves.toBe('Hey Pesto'));
});
