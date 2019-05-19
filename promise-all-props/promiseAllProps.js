
function promiseAllProps(allProps) {
  return new Promise ((resolve, reject)=> {
    resolve(allProps);
  }).then((result)=> {
    return (result.foo, result.bar);
  });
}

export {
  promiseAllProps,
};
