import { proxyIterable } from './proxyIterable';

describe('proxyIterable', () => {
  test('main', () => {
    let i = 0;

    const createFixture = () => {
      return {
        increment(value) {
          i += value;
          return i;
        },
      };
    };

    const array = [
      createFixture(),
      createFixture(),
      createFixture(),
      createFixture(),
    ];

    const proxyArray = proxyIterable(array);

    expect(Array.isArray(proxyArray)).toBe(true);
    expect(proxyArray.increment(2)).toEqual([2, 4, 6, 8]);
    expect(i).toBe(8);
  });

  test('`this` works correctly', () => {
    const fixture = {
      i: 0,
      increment(value) {
        this.i += value;
        return this.i;
      },
    };

    const array = [fixture, fixture, fixture, fixture];

    expect(proxyIterable(array).increment(2)).toEqual([2, 4, 6, 8]);
    expect(fixture.i).toBe(8);
  });

  test('does not work on heterogeneous iterable', () => {
    const createFixture = () => {
      return {
        foo() {},
      };
    };

    const array = [
      createFixture(),
      createFixture(),
      {},
      createFixture(),
    ];

    const proxyArray = proxyIterable(array);

    expect(() => {
      proxyArray.foo();
    })
      .toThrowError(/Item 3 of the iterable is missing the foo\(\) method/);
  });

  test('should work on array of non-objects', () => {
    expect(proxyIterable(['a', 'b']).includes('b')).toEqual([false, true]);
  });

  test('should only apply to the items of the iterable', () => {
    const fixture = {
      foo() {
        return '🦄';
      },
    };

    const array = [fixture, fixture];
    array.foo = () => '🤡';

    expect(proxyIterable(array).foo()).toEqual(['🦄', '🦄']);
  });
});
