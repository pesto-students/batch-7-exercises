
Does the fact that account is constant mean that we can't update password?
Why, or why not? And if we can, how could we make it so that we can't?
Hint: Object property descriptors

Work with this code - 

```js
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  account.password = 's3cret';
  return account.password;
}
```