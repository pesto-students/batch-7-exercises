
function timeout(value) {
  return new Promise((resolve, reject)=> {
    resolve(value);
  }).then((result)=> {
    if (result === 'Pesto') {
      return 'Hello Pesto';
    }
    else {
      reject (result);
    }
  }).catch((error)=> {
    throw new Error('Something went wrong');
  });
}

export {
  timeout,
};
