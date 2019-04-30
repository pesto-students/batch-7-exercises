## Instructions 
Look at this code - 

```js
function blockScoping(n) {
  var callbacks = [];
  for (var i = 0; i <= 10; i += 1) {
    callbacks.push(() => i);
  }
  return callbacks[n]();
}
```

This is a typical mistake to make in JavaScript. We create a number of
functions in a loop, and refer to an outside variable from these functions.
All of them will end up referring to the same variable, which ends up being
incremented to 10. Thus, callbacks[2] does not log 2. It logs 10, as do all
functions in the array.

Convert the functionality below to es6, making use of block scoping

## Restrictions
- You have to work with above code. 