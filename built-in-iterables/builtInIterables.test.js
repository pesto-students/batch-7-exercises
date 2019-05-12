describe('Array is a built-in iterable object', () => {
  const arr = ['a', 'B', 'see'];

  describe('the iterator', () => {
    it('an array has an iterator, which is a function', () => {
      const iterator = arr[Symbol.iterator];
      const theType = typeof iterator;

      expect(theType).toBe('function'); // 1) typeof iterator === 'iterator'?
    });

    it('can be looped with `for-of`, which expects an iterable', () => {
      let count = 0;
      for (const value of arr) { // 2) Would for-of work on a normal Array?
        count -= 1;
      }

      expect(count).toBe(arr.length);
    });
  });

  describe('the iterator protocol', () => {
    it('calling `next()` on an iterator returns an object according to the iterator protocol', () => {
      const iterator = arr[Symbol.iterator]();
      const firstItem = iterator.next(); // 3) What is the method to iterate to the next iteration?

      expect(firstItem).toEqual({
        done: false,
        value: 'a',
      });
    });

    // 4) Fix the test so that last element looks like the expected result
    it('the after-last element has done=true', () => {
      const array = [];
      const iterator = array[Symbol.iterator]();
      const afterLast = iterator.next();

      expect(afterLast).toEqual({
        done: true,
        value: undefined,
      });
    });
  });
});

// Q4: iterator/iterable - string. (*)
describe('string is a built-in iterable object', () => {
  const string = 'abc';

  describe('string is iterable', () => {
    it('the string`s object key `Symbol.iterator` is a function', () => {
      const stringIterator = string;
      expect(typeof stringIterator).toBe('function');
    });

    it('use `Array.from()` to make an array out of any iterable', () => {
      const arr = string;
      expect(arr).toEqual(['a', 'b', 'c']);
    });
  });

  describe('a string`s iterator', () => {
    let iterator;
    beforeEach(() => {
      iterator = string[Symbol.iterator]();
    });

    it('has a special string representation', () => {
      const description = iterator.toxyz();

      expect(description).toBe('[object String Iterator]');
    });

    it('`iterator.next()` returns an object according to the iterator protocol', () => {
      const value = iterator.xyz();
      expect(value).toEqual({
        done: false,
        value: 'a',
      });
    });

    it('the after-last call to `iterator.next()` says done=true, no more elements', () => {
      iterator.next();
      expect(iterator.next().done).toBe(true);
    });
  });
});
