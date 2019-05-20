function* generatorIterable() {
  var index = 1;
  while (index < 6) yield index++;
}

export { generatorIterable };
