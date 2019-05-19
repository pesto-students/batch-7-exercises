
function rejectPromise(promise) {
  const p1 = ()=> new Promise((resolve, reject)=> {
    resolve();
  })
  p1().then(()=> {
    return ('REJECTED!');
  })
}

export {
  rejectPromise,
};