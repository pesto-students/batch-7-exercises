
function* generatorIterable() {
  let i = 1;
  while (i <= 5) {
    yield i;
    i += 1;
  }
}

export {
  generatorIterable,
};
