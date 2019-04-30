## Instructions

Create an simple event listener for greeting. Then create a function that when called,
emits a 'greeting' event with the given name. In the event listener, log `hello ${name}`
in the console. Also create an error listener. If the name argument passed to the function
emitting the event is not a string, emit the error event. In the error event listener,
throw a new error.

Example:

```js
greet('Pesto');
// => Hello Pesto;

greet(123);
// => Error: Enter a string please!
```

// function greet(name) {
//   if (typeof name !== 'string') myEvent.emit('error');
//   else myEvent.emit('greet', name);
// 