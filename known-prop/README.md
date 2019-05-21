## Instructions

#### Q3: Use ES6 Proxy to implement the following function (*)

```js
  const obj = {foo: true};

  console.log(obj.bar);
  //=> undefined

  const obj2 = knownProp(obj);

  // Throws a TypeError when you try to access an unknown property
  console.log(obj2.bar);
  //=> [TypeError] Unknown property: bar
```