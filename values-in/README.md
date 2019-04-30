## Instructions


Q3.
Returns a list of all the properties, including prototype properties, of the
supplied object.
Note that the order of the output array is not guaranteed to be consistent
across different JS platforms.

```js
const F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
const f = new F();
R.valuesIn(f); //=> ['X', 'Y']
```