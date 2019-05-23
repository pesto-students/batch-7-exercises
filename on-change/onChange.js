function onChange(object, callback) {
  const handler = {
    get(target, prop) {
      try {
        if (typeof target[prop] === 'function' && prop === 'sort') {
          callback();
        }
        return new Proxy(target[prop], handler);
      } catch (err) {
        return Reflect.get(target, prop);
      }
    },
    set(target, prop, value) {
      callback();
      return Reflect.set(target, prop, value);
    },
    defineProperty(target, prop, descriptor) {
      callback();
      return Reflect.defineProperty(target, prop, descriptor);
    },
    deleteProperty(target, prop) {
      callback();
      return Reflect.deleteProperty(target, prop);
    },
  };

  return new Proxy(object, handler);
}

export { onChange };
