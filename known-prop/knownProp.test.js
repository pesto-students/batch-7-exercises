import { knownProp } from './knownProp';

describe('knownProp', () => {
  test('returns the value if known property is accessed', () => {
    const object1 = knownProp({ foo: true });
    expect(object1.foo).toBe(true);
    const object2 = knownProp({ foo: undefined });
    expect(object2.foo).toBe(undefined);
  });

  test('throws error if unknown property is accessed', () => {
    const result = knownProp({ foo: true });
    expect(() => {
      console.log(result.bar);
    }).toThrowError(TypeError, /Unknown property/);
  });
});
