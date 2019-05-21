import { setDefaultProperty } from './setDefaultProperty';

describe('setDefaultProperty', () => {
  test('returns the value if known property is accessed', () => {
    const object1 = setDefaultProperty({ foo: 'bar' }, 'defaultValue');
    expect(object1.foo).toBe('bar');
    const object2 = setDefaultProperty({ foo: undefined }, 'defaultValue');
    expect(object2.foo).toBe(undefined);
  });

  test('returns the default value if known property is accessed', () => {
    const result = setDefaultProperty({ foo: 'bar' }, 'defaultValue');
    expect(result.bazzz).toBe('defaultValue');
  });
});
