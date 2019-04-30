## Instructions


Removes one level of nesting from any chain.

```js
  unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
  unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
```