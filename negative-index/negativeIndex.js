function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Invalid input type. Only arrays are supported.');
  }

  const proxyHandler = {
    get(arr, index) {
      if (index < 0) {
        index = Number.parseInt(arr.length, 10) + Number.parseInt(index, 10);
      }
      // console.log(index);
      return arr[index];
    },
    set(arr, index, value) {
      if (index < 0) {
        // eslint-disable-next-line no-param-reassign
        index = Number.parseInt(arr.length, 10) + Number.parseInt(index, 10);
      }
      arr[index] = value;
      return true;
    },
  };

  return new Proxy(array, proxyHandler);
}

export { negativeIndex };
