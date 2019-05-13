
function counterFactory() {
  let x = 0;
  return {
    increment() {
      x += 1;
      return x;
    },
    decrement() {
      x -= 1;
      return x;
    },
  };
}

export {
  counterFactory,
};
