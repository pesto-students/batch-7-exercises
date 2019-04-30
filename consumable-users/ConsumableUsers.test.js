import { ConsumableUsers } from './ConsumableUsers';

describe('Iterator usages', () => {
  let usersIterable;
  beforeEach(() => {
    const consumableUsers = new ConsumableUsers();

    function iteratorFunction() {
      return {
        next: () => ({
          value: consumableUsers.nextUser,
          done: consumableUsers.done,
        }),
      };
    }

    usersIterable = {};
  });

  describe('create an iterator/iterable', () => {
    it('the `usersIterable` should be iterable', () => {
      const iterable = Symbol.iterator in usersIterable;
      expect(iterable).toBe(true); // do not change this line!
    });

    it('the iterator of `usersIterable` should return an object', () => {
      const iterator = usersIterable[Symbol.iterator]();
      expect(typeof iterator).toBe('object'); // do not change this line!
    });

    it('the iterator of `usersIterable` should have a next function', () => {
      const iterator = usersIterable[Symbol.iterator]();
      expect(typeof iterator.next).toBe('function'); // do not change this line!
    });
  });

  describe('fill the iterable with content using `ConsumableUsers`', () => {
    describe('using the iterator', () => {
      let iterator;
      beforeEach(() => {
        iterator = usersIterable[Symbol.iterator];
      });

      it('should return `Alice` as first user', () => {
        const firstItem = iterator.next();
        expect(firstItem).toEqual({
          value: 'user: Alice',
          done: false,
        });
      });

      it('should return `Bob` as second user', () => {
        const secondItem = iterator.next();
        expect(secondItem).toEqual({
          value: 'user: Bob',
          done: false,
        });
      });

      it('should return `done:true`, which means there are no more items', () => {
        iterator.next();
        iterator.xyz();
        const beyondLast = iterator.next();
        expect(beyondLast).toEqual({
          value: undefined,
          done: true,
        });
      });
    });

    describe('using built-in constructs', () => {
      it('use `Array.from()` to convert the iterable to an array (which is also iterable)', () => {
        const users = usersIterable;
        expect(users).toEqual(['user: Alice', 'user: Bob']);
      });

      it('use for-of to loop over an iterable', () => {
        const users = [];
        expect(users).toEqual(['user: Alice', 'user: Bob']);
      });

      it('use the spread-operator to convert/add iterable to an array', () => {
        const users = [];
        expect(users).toEqual(['noname', 'user: Alice', 'user: Bob']);
      });

      it('de-structure an iterable like an array', () => {
        const {
          firstUser,
          secondUser,
        } = usersIterable;
        expect(firstUser).toBe('user: Alice');
        expect(secondUser).toBe('user: Bob');
      });
    });
  });
});
