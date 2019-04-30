## Instructions


Gives a single-word string description of the (native) type of a value,
returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
attempt to distinguish user Object types any further, reporting them all as
'Object'.

```js
  type({}); //=> "Object"
  type(1); //=> "Number"
  type(false); //=> "Boolean"
  type('s'); //=> "String"
  type(null); //=> "Null"
  type([]); //=> "Array"
  type(/[A-z]/); //=> "RegExp"
  type(() => {}); //=> "Function"
  type(undefined); //=> "Undefined"
```