function promiseAllProps(promisesObj) {
  return Promise.all(promisesObj.values).then(promisesObj);
}

export { promiseAllProps };
