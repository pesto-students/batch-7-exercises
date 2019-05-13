# Questions

1) What will be the output of this code ? 
  ```js
  var x = { foo : 1};
  var output = (function() {
    delete x.foo;
    return x.foo;
  })();

  console.log(output);
  ```

2) What will be the output of the following code ?
  ```js
  var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company
  console.log(emp1.company);
  ```

3) How we will calculate length of the above associative array counterArray ?
  ```js
  var counterArray = {
    A : 3,
    B : 4
  };
  counterArray["C"] = 1;
  ```

4) How we can prevent modification of object in JavaScript ?

5) What is the output of the following code ?
  ```js
  (function() {
    var objA = {
      foo: 'foo',
      bar: 'bar'
    };
    var objB = {
      foo: 'foo',
      bar: 'bar'
    };
    console.log(objA == objB);
    console.log(objA === objB);
  }());
  ```
