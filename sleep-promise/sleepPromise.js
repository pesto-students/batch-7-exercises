
function sleepPromise(args) {
  const wait = ms => new Promise(resolve => setTimeout(resolve, args));
  wait(args).then((result) => {
    return result;
  });
}

export {
  sleepPromise,
};
