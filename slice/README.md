## Instructions


Returns the elements of the given list or string (or object with a `slice`
method) from `fromIndex` (inclusive) to `toIndex` (exclusive).

```js
    slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
    slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
    slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
    slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
    slice(0, 3, 'ramda');                     //=> 'ram'
```