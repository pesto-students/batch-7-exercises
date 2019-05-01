
function cacheFunction(func) {
  if (!func) {
    return Function;
  }
  return function() { 
    if (func) {
      var result = func.apply(this, arguments);
      func = null;
    }
    return result;
  }
}

export {
  cacheFunction,
};
