const handler = {
  get(target, name) {
    if (name in target) {
      return target[name];
    }
    throw new TypeError(`Unknown property: ${name}`);
  },
};

function knownProp(object) {
  return new Proxy(object, handler);
}

export { knownProp };
