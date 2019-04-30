# ES6 questions

1. What is the value of `p3` here?

  ```js
    let phonetic = ['sierra', 'charlie'];
    let [p1, p2, p3] = phonetic;
  ```

   How do you think you could _default_ `p3` to a suitable value?
   Try it.

2. Given this array:

  ```js
    let arr2 = ['one', 'two', ['three', ['four', ['five', 'six', 'seven']], 'eight']];
  ```

   Create a destructuring pattern to give this result:

  ```js
    console.log(m, n, o);       // two six eight
  ```

3. Assume you have this object:

      ```js
        let stats = {
          packetForwarded: 5345,
          redirectSent: 427,
          forwardCacheHit: 4821,
          forwardCacheMiss: 524,
        };
      ```

   1. Use destructuring to assign variables such that:

      ```js
        console.log(hits);            // 4821
        console.log(misses);          // 524
      ```

    2. What happens when this line is executed? Why, and how would you fix it?

      ```js
        { forwardCacheHit: myhits, forwardCacheMiss: mymisses } = stats;
      ```

4. What will happen when this code is executed? Why?

  ```js
    {
      console.log(i);
      let i = 5;
    }
  ```

5. What will this code output?

  ```js
    let invoiceId = 647;
      for (let invoiceId = 0; invoiceId < 5; invoiceId++) {
      }
    console.log(invoiceId);
  ```

6. What will be the output of this code snippet?

    ```js
      const N_PROC;
      console.log(N_PROC);
      N_PROC = 4;
      console.log(N_PROC);
    ```

    1. TypeError
    2. ReferenceError
    3. undefined 4
    4. SyntaxError

7. Can default parameter expressions be computed? Is this function valid? Try it.

    ```js
      function getTotalPrice(price, tax = price * 0.2) {
        return price + tax;
      }
    ```

    1. Does the order of the parameters matter?
    2. Could the `0.2` be replaced by another variable or function call?