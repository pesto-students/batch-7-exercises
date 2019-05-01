
function factorial(args) {
  if (args < 2) {
    return 1;
  }
  return factorial(args - 1) * args;
}

export {
  factorial,
};
