function knownProp(obj) {
  const proxyHandler = {
    get(target, property) {
      if (property in target) {
        return target[property];
      }
      throw new TypeError('Unknown property.');
    },
  };
  return new Proxy(obj, proxyHandler);
}

export { knownProp };
