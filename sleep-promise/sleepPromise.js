
function sleepPromise(args) {
  return new Promise(resolve => setTimeout(resolve, args));
}

export {
  sleepPromise,
};
