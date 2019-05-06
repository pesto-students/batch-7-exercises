
function rejectPromise() {
  return new Promise((resolve) => {
    return resolve('REJECTED!');
  });
}

export {
  rejectPromise,
};
