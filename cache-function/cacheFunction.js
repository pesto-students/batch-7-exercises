const cache = [];

function cacheFunction(inputFunction) {
  return (args) => {
    const found = cache.find(object => object.input === args);
    if (found) {
      return found.result;
    }

    const func = inputFunction(args);
    cache.push({
      input: args,
      result: func,
    });
    return func;
  };
}

export { cacheFunction };
