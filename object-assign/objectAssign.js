function objectAssign(...args) {
  let result = args.reduce((acc, curr) => Object.assign(acc, curr));
  return result;
}

export { objectAssign };
