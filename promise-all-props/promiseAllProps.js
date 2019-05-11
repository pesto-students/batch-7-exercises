function promiseAllProps(object) {
  const resultPromise = new Promise(() => {
    const reultObject = {};
    for (const key in object) {
      object[key].then((result) => {
        reultObject[key] = result;
        return reultObject;
      });
    }
  });

  return resultPromise;
}

export {
  promiseAllProps,
};
