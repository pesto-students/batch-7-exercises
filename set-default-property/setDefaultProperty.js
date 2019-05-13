function setDefaultProperty(obj, defaultVal) {
  const handler = {
    get: function(target, name) {
      return target.hasOwnProperty(name) ? target[name] : defaultVal;
    }
  };
  let resultObj = new Proxy(obj, handler);
  return resultObj;
}

export { setDefaultProperty };
