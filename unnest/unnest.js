function unnest(data) {
  let unnestedRes = [];
  const array = data;
  if (typeof array === 'object' && !Array.isArray(array)) {
    array[Symbol.iterator] = function () {
      let i = -1;
      return {
        next() {
          i += 1;
          if (i < array.length) {
            return { value: array[i], done: false };
          }
          return { value: undefined, done: true };
        },
      };
    };
  }

  for (const ele of array) {
    if (Array.isArray(ele)) {
      unnestedRes = unnestedRes.concat(ele);
    } else {
      unnestedRes.push(ele);
    }
  }
  return unnestedRes;
}

export { unnest };
