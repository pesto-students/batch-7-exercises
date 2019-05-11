function constImmutable() {
  const account = { username: 'pesto' };
  Object.defineProperty(account, 'password', {
    value: 'initialPassword',
    writable: false,
  });
  return account.password;
}

export { constImmutable };
