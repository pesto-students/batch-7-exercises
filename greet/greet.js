
function greet(value) {
  return new Promise((resolve,reject)=> {
    console.log(`Hey ${value}`)
  })
}

export {
  greet,
};
