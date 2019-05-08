function knownProp(object) {
  const handler = {
    get: (object, property) => {
      if (property in object) {
        return object[property];
      } else {
        throw new TypeError("Unknown property");
      }
    }
  };
  return new Proxy(object, handler);
}

export { knownProp };
