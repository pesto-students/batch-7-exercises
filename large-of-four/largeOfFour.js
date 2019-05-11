function largeOfFour(arrays) {
  return arrays.reduce((acc, array) => {
    acc.push(Math.max(...array));
    return acc;
  }, []);
}

export { largeOfFour };
