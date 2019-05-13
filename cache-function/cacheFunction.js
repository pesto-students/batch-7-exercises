
function cacheFunction(cb) {
  let cache = {};
  let key;
  return (...args)=>{
    for (key of args){
      if(cache.hasOwnProperty(key)) {
        return cache[key];
      }else {
        return cache[key] = cb(key);
      }
    }
  }

}

export {
  cacheFunction,
};
