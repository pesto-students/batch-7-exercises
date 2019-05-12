
function rejectPromise(...args) {
  let promise = new Promise((resolve,reject) => {
   resolve("REJECTED!")
  })
  return promise.catch((message)=> {
     message
  })
}

export {
  rejectPromise,
};
