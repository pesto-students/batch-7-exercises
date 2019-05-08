
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.defineProperties(account,'password',{
    writable: false
  })
  account.password = 's3cret';
  return account.password;
}
export {
  constImmutable,
};
