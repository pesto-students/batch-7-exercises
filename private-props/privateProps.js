
function privateProps(object, privacyFilter) {
  let isDirectlyAccessed = true;
  const handler = {
    get(target, propName) {

      if (propName === 'getPrivate') {
        isDirectlyAccessed = false;
        return Reflect.get(target, propName);
      }
      if (privacyFilter(propName) && isDirectlyAccessed) {
        throw new TypeError(`Private property ${propName} not accessible`);
      }
      isDirectlyAccessed = true;
      return Reflect.get(target, propName);
    },
    has(target, propName) {
      if (privacyFilter(propName)) {
        return false;
      }
      return Reflect.has(target, propName);
    },
    set(target, propName, value) {
      if (privacyFilter(propName)) {
        throw new TypeError(/Can't set property "_private"/);
      }
      return Reflect.set(target, propName, value);
    },
    ownKeys(target) {
      const keys = Reflect.ownKeys(target);
      return keys.filter(key => !privacyFilter(key));
    },
  }

  return new Proxy(object, handler);
}

export {
  privateProps,
};
