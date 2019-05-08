const appendMyPromise = promise => previousResult => promise(previousResult);

function sequentialPromise(promises) {
  return promises.reduce(
    (allPromises, promise) => allPromises.then(appendMyPromise(promise)),
    Promise.resolve([]),
  );
}

export { sequentialPromise };
