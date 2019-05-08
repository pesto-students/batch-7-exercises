
function negativeIndex(fixture) {
  if (!(fixture instanceof Array)) {
    throw new TypeError ('TypeError, /Only arrays are supported/');
  }
  const proxy = new Proxy(fixture,{
    get (target, prop) {
      if (!isNaN(prop)) {
        prop = parseInt (prop, 10);
        if (prop < 0) {
          prop += target.length;
        }
      }
      return target[prop];
    }
  });
  return proxy;
}

export {
  negativeIndex,
};
