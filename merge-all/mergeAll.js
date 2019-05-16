function mergeAll(args) {
  debugger;
  let mergeObj = args.reduce(function(acc, curr) {
    console.log(acc, curr);
    return Object.assign(acc, curr);
  });
  console.log(mergeObj);
  return mergeObj;
}

export { mergeAll };
