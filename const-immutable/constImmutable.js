function constImmutable() {
  const account = {};
  Object.defineProperties(account, {
    username: {
      value: 'pesto',
    },
    password: {
      value: 'initialPassword',
      writable: false,
    },
  });
  try {
    account.password = 's3cret';
  } catch (error) {
    console.error('You cannot update password.');
  }
  return account.password;
}

export { constImmutable };
