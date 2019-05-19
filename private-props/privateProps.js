function privateProps(obj, privacyFilterFunc) {
  const handler = {
    get(target, prop) {
      if (!privacyFilterFunc(prop)) {
        if (typeof target[prop] === 'object') {
          return new Proxy(target[prop], handler);
        }
        if (typeof target[prop] === 'function') {
          return target[prop].bind(target);
        }
        return target[prop];
      }
      throw new Error(`Property ${prop} is private`);
    },
    has(target, prop) {
      if (!privacyFilterFunc(prop)) {
        return Reflect.has(target, prop);
      }
      return false;
    },
    ownKeys(target) {
      const keys = Reflect.ownKeys(target);
      return keys.filter(key => !privacyFilterFunc(key));
    },
  };
  return new Proxy(obj, handler);
}
export { privateProps };
