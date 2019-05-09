
function isEven(...args) {
  var a = args[0]/2;
  return Number.isInteger(a);
}

export {
  isEven,
};
