var errorName;
function throwErrors() {
  try {
    arr.id = 0;
  } catch (err) {
    errorName = err.name;
  }
}
throwErrors();

export { errorName };
