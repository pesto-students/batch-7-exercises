
function isPromise(obj) {
  if(!obj) {
    return false;
  }
  else {
    return typeof obj.then == 'function';
  }
  
}

export {
  isPromise,
};
