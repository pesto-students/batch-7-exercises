
function joinArrays(...args) {
  return args.reduce((acc, array) => (acc.concat(array)), []);
}

export {
  joinArrays,
};
