## Instructions

Use ES6 Proxy to get a default property if a non-existing property is accessed.

```js
  const myObj = setDefaultProperty({ foo: 'bar' }, 'default');
  myObj.foo // bar
  myObj.xyz // default
```
