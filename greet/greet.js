
function greet(value) {
  return new Promise((resolve,reject)=> {
    resolve(`Hey ${value}`)
  })
}

export {
  greet,
};
