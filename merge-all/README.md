## Instructions

Q2 (*)
Merges a list of objects together into one object.

```js
  mergeAll([{ foo:1 }, { bar:2}, { baz:3}]); //=> { foo:1, bar:2, baz:3 }
  mergeAll([{ foo:1 }, { foo:2}, { bar:2}]); //=> { foo:2, bar:2 }
  mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
```