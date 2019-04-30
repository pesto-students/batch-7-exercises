## Instructions


Checks if a list ends with the provided sublist.

Similarly, checks if a string ends with the provided substring.

```js
  doesEndWith('c', 'abc')                //=> true
  doesEndWith('b', 'abc')                //=> false
  doesEndWith(['c'], ['a', 'b', 'c'])    //=> true
  doesEndWith(['b'], ['a', 'b', 'c'])    //=> false
```

#### Restrictions
- Don't use `String.prototype.endsWith`