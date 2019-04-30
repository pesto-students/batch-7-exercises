import { rejectPromise } from './rejectPromise';

describe('rejectPromise', () => {
  test('The function should return a Promise', () => {
    expect(rejectPromise() instanceof Promise).toBe(true);
  });

  test('Promise resolve value', () => expect(rejectPromise()).resolves.toBe('REJECTED!'));
});
