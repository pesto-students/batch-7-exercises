function* generatorIterable() {
  for (let i = 1; i <= 5; i++) yield i;
}

export {
  generatorIterable,
};
