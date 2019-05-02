function factorial(number) {
  if (!factorial.cache) {
    factorial.cache = {
      0: 1,
      1: 1,
    };
  }

  if (!factorial.cache[number]) {
    factorial.cache[number] = number * factorial(number - 1);
  }
  return factorial.cache[number];
}

export { factorial };
