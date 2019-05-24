function uniqueRandom(from, to) {
  let prev = 0;
  return function again() {
    let newUnique = Math.floor(Math.random() * (to - from)) + from;
    if (newUnique === prev) {
      return again();
    } else {
      prev = newUnique;
      return newUnique;
    }
  }; //The maximum is exclusive and the minimum is inclusive
}

export { uniqueRandom };
