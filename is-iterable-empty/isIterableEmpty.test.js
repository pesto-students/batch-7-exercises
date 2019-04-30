import { isIterableEmpty } from './isIterableEmpty';

describe('isIterableEmpty', () => {
  test('should not use Array.from', () => {
    expect(/Array.from/gm.test(isIterableEmpty.toString())).toBe(false);
  });

  test('should determine if iterable is empty or not', () => {
    const iterable = {};
    iterable[Symbol.iterator] = function* iterator() {
      yield 1;
    };

    const emptyIterable = {};
    // eslint-disable-next-line no-empty-function
    emptyIterable[Symbol.iterator] = function* iterator() {};

    expect(isIterableEmpty(emptyIterable)).toBe(true);
    expect(isIterableEmpty([])).toBe(true);
    expect(isIterableEmpty(new Set([]))).toBe(true);
    expect(isIterableEmpty(iterable)).toBe(false);
    expect(isIterableEmpty([1, 2])).toBe(false);
    expect(isIterableEmpty(new Set([1, 2]))).toBe(false);
  });
  test('should work for infinite iterators', () => {

  });
});
