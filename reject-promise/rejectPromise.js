
function rejectPromise() {
  const promise = new Promise(() => {
    throw new Error('Error Occured');
  });
  return promise.catch(() => 'REJECTED!');
}

export {
  rejectPromise,
};
