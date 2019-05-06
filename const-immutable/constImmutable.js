
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };

  Object.defineProperty(account, 'password', {
    value:'initialPassword',
    writable:false
  })
  // account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
