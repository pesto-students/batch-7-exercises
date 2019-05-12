
function timeout(helloTo) {
  return Promise.resolve(`Hello ${helloTo}`);
}

export {
  timeout,
};
