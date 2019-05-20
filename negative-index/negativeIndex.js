
function negativeIndex(target) {
  if (!(target instanceof Array)) {
    throw new TypeError ('TypeError, /Only arrays are supported/');
  }
  const proxy = new Proxy(target,{
    get (target, prop) {
      if (!isNaN(prop)) {
        prop = parseInt (prop, 10);
        if (prop < 0) {
          prop += target.length;
        }
      }
      return Reflect.get(target, prop);
    },
    
    set (target, prop, value) {
      if (!isNaN(prop)) {
        prop = parseInt(prop,10);
        if ( prop < 0) {
          prop += target.length;
          target[prop] = value;
        }
      }
      return Reflect.set(target,prop, value);
    }
  }
  );
  return proxy;
}

export {
  negativeIndex,
};