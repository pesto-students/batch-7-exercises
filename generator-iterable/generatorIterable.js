function* generatorIterable() {
  for (let i = 1; i <= 5; i += 1) {
    yield i;
  }
}

export { generatorIterable };
