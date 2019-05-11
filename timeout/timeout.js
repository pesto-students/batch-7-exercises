function timeout(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello ${name}`);
    }, 2);
  });
}

export { timeout };
