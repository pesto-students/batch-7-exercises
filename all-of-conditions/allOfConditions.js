function allOfConditions(...callbackFuncs) {
  return args => callbackFuncs.reduce((acc, callback) => {
    if (acc) {
      return callback(args);
    }
    return null;
  }, true);
}
export { allOfConditions };
