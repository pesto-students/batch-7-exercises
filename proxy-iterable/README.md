## Instructions

#### Q2: Use ES6 Proxy to implement the following function

Call a method on an iterable to call it on all items of the iterable

```js
  const x = {
    i: 0,
    increment(value) {
      this.i += value;
      return this.i;
    }
  };

  const array = [x, x, x, x];
  const proxyArray = proxyIterable(array);

  Array.isArray(proxyArray);
  //=> true

  proxyArray.increment(2);
  //=> [2, 4, 6, 8];

  x.i;
  //=> 8
```