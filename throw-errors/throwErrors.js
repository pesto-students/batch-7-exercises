
function throwErrors(...args) {
  return args;
}
const errorName = new ReferenceError().toString();

export {
  throwErrors,
  errorName,
};
