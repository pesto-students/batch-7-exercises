
function sequentialPromise(promises) {
  const resultPromise = promises.reduce((acc, promise) => acc.then(promise),
    Promise.resolve(1));
  return resultPromise;
}

export {
  sequentialPromise,
};
