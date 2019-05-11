
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.freeze(account);
  const newAccount = {...account};
  newAccount.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
