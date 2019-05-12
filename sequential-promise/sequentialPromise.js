function sequentialPromise(fns, resolvedValue) {
  if (fns.length === 1) {
    return Promise.resolve(fns[0](resolvedValue));
  }
  return new Promise((resolve, reject) => {
    fns[0](resolvedValue)
      .then(res => resolve(sequentialPromise(fns.slice(1), res)))
      .catch(e => reject(e));
  });
}

export { sequentialPromise };
