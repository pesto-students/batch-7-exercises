## Instructions

Returns a function of arity `n` from a (manually) curried function.

```js
const addFour = a => b => c => d => a + b + c + d;

const uncurriedAddFour = uncurryN(4, addFour);
uncurriedAddFour(1, 2, 3, 4); //=> 10
```