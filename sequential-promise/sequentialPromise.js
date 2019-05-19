function sequentialPromise(promiseChain) {
  let result = promiseChain.reduce(
    (acc, currentFunction) => acc.then(currentFunction),
    Promise.resolve(1)
  );
  return result;
}

export { sequentialPromise };
