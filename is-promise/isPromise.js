
function isPromise(arg) {
  return Promise.resolve(arg) === arg;
}

export {
  isPromise,
};
