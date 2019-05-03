function counterFactory() {
  let counter = 0;
  return {
    increment: () => {
      counter += 1;
      return counter;
    },
    decrement: () => {
      counter -= 1;
      return counter;
    },
  };
}

export { counterFactory };
