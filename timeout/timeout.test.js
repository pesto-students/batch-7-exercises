import { timeout } from './timeout';

describe('timeout', () => {
  test('works with promises', () => {
    timeout('Pesto').then(data => expect(data).toBe('Hello Pesto'));
  });
});
