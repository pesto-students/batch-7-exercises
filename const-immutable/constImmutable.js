function constImmutable() {
  const account = {
    username: "pesto",
  };
  Object.defineProperty(account, 'password', {
    value: 'initialPassword',
    writable: false,
  });
  try {
    account.password = "s3cret";
  } catch (e) {
    return account.password;
  }

}
export { constImmutable };
