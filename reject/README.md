## Instructions


The complement of [`filter`](#filter).

Acts as a transducer if a transformer is given in list position. Filterable
objects include plain objects or any object that has a filter method such
as `Array`.

```js
      const isOdd = (n) => n % 2 === 1;

      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]

      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
```