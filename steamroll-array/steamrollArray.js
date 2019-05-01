//@TODO



function steamrollArray(...args) {
function flattenDeep(args) {
  return args.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
//flattenDeep();
}

export {
  steamrollArray,
};
