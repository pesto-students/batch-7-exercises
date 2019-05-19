function sleepPromise(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
export { sleepPromise };
