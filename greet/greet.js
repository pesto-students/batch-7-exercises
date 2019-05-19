;

function greet(args) {
  return ( new Promise((resolve, reject)=> {
    resolve(args);
  }).then((resolved)=> {
    return 'Hey Pesto';
  }));
}

export {
  greet,
};
