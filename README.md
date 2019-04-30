## Questions (Segment 1)

1) What would be the output of following code ?
  ```js
    (function() {
      var objA = new Object({ foo: 'foo' });
      var objB = new Object({ foo: 'foo' });
      console.log(objA == objB);
      console.log(objA === objB);
    }());
  ```
  - false true
  - false false
  - true false
  - true true

2) What are multiple run-times in the event loop?

3) In javascript runtime environment, what is the difference between stack and heap?