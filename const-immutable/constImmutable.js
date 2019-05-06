
function constImmutable(...args) {
  const account = {
    username: 'pesto',
  };
  Object.defineProperty (account,'password',{value : 'initialPassword'}) ;
  return account.password;
}


export {
  constImmutable,
};
