function proxyIterable(array) {
  const handler = {
    get(target, props) {
      return Reflect.get(target, props);
    },
  };
  return new Proxy(array, handler);
}

export { proxyIterable };
