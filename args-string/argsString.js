
function argsString(stringWithExpr, values) {
  return values.reduce((acc, value) => acc.replace('{}', value),
    stringWithExpr);
}

export {
  argsString,
};
