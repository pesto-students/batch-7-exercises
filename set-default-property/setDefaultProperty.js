
function setDefaultProperty(object, defaultValue) {
  return new Proxy (object, {
    get (obj, key) {
      if (!obj.hasOwnProperty(key)) {
        return defaultValue;
      }
      else {
        return obj[key];
      }
    }
  });
}

export {
  setDefaultProperty,
};
