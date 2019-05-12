
function timeout(name) {
  return new Promise(resolve => `Hello $name`);
}

export {
  timeout,
};
