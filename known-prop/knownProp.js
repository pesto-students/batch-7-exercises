function knownProp(object) {
  return new Proxy(object, {
    get(obj, keyname) {
      if (!obj.hasOwnProperty(keyname)) {
        throw TypeError('Unknown property');
      }
      return obj[keyname];
    }
  });
}

export { knownProp };
