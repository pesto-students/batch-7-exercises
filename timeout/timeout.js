function timeout(name) {
  return Promise.resolve(`Hello ${name}`);
}

export { timeout };
