
function* generatorIterable() {
  for (const i of [1,2,3,4,5]) {
    yield i;
  }
}

export {
  generatorIterable,
};
