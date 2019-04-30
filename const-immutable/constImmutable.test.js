import { constImmutable } from './constImmutable';

describe('constImmutable', () => {
  test('const object should have immutable properties', () => {
    expect(constImmutable()).toBe('initialPassword');
  });
});
