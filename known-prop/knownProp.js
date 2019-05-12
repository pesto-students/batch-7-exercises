
function knownProp(object) {
  return new Proxy (object, {
    get (obj, key) {
      if (!obj.hasOwnProperty(key)) {
        throw new TypeError ('Unknown property/');
      }
      else {
        return obj[key];
      }
    }
  });
}

export {
  knownProp,
};
