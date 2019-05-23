function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Only arrays are supported, you have passed ${typeof array}`);
  }
  const getPosIndex = (length, index) => length + (index % length);

  const handler = {
    get(target, prop) {
      try {
        let index = prop;
        if (index < 0) {
          index = getPosIndex(target.length, parseInt(index, 10));
        }
        return Reflect.get(target, index);
      } catch (Exception) {
        return Reflect.get(target, prop);
      }
    },
    set(target, prop, value) {
      try {
        let indexToLook = prop;
        if (indexToLook < 0) indexToLook = getPosIndex(target.length, indexToLook);

        return Reflect.set(target, indexToLook, value);
      } catch (ex) {
        return Reflect.set(target, prop, value);
      }
    },
  };
  return new Proxy(array, handler);
}

export { negativeIndex };
