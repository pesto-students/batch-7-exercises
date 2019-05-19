function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Only arrays are supported");
  }
  var handler = {
    get: function(target, index) {
      if (index < 0) {
        index = Number.parseInt(target.length, 10) + Number.parseInt(index, 10);
      }

      return target[index];
    },
    set: function(target, index, value) {
      if (index < 0) {
        index = Number.parseInt(target.length, 10) + Number.parseInt(index, 10);
      }
      target[index] = value;
      return true;
    }
  };
  let result = new Proxy(array, handler);
  return result;
}

// retutn Reflect.get(target,propname);
// set(target,propname,__values)
export { negativeIndex };
