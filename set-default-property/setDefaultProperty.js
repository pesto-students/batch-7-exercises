function setDefaultProperty(obj, defaultValue) {
  const handler = {
    get(target, props) {
      if (props in target) {
        return Reflect.get(target, props);
      }
      return defaultValue;
    },
  };
  return new Proxy(obj, handler);
}

export { setDefaultProperty };
