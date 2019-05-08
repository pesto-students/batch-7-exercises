function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Only arrays are supported, received ${typeof array} `);
  }

  let arrayLength = array.length || 0;

  return new Proxy(array, {
    get(target, prop) {
      try {
        let indexToLook = prop;
        if (indexToLook < 0) indexToLook = arrayLength + parseInt(indexToLook, 10);
        return Reflect.get(target, indexToLook);
      } catch (ex) {
        return Reflect.get(target, prop);
      }
    },
    set(target, prop, value) {
      try {
        let indexToLook = prop;
        if (indexToLook < 0) indexToLook = arrayLength + parseInt(indexToLook, 10);
        if (Number(prop) > arrayLength) {
          arrayLength = Number(prop) + 1;
        }
        return Reflect.set(target, indexToLook, value);
      } catch (ex) {
        return Reflect.set(target, prop, value);
      }
    },
  });
}

export { negativeIndex };
