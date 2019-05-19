function joinArrays(...args) {
  var mergedArray = args.reduce((acc, currArr) => [...acc, ...currArr]);
  return mergedArray;
}

export { joinArrays };
