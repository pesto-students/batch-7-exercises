
function promiseAllProps(object) {
  return Promise.all(object.values).then(object);
}

export {
  promiseAllProps,
};
