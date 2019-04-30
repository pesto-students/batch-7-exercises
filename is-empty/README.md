## Instructions


Returns `true` if the given value is its type's empty value; `false`
otherwise.

```js
  isEmpty([1, 2, 3]);     //=> false
  isEmpty([]);            //=> true
  isEmpty('');            //=> true
  isEmpty(null);          //=> false
  isEmpty({});            //=> true
  isEmpty({ length: 0 }); //=> false
```
