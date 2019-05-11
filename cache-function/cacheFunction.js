
function cacheFunction(callBackFunction) {
   var cache = {}
   return (...args) => {
      let n = args[0]
      if(n in cache) {
        return cache[n]
      }
      else {
        let result = callBackFunction(n)
        cache[n] = result
        return result
      }
   }
 
}

export {
  cacheFunction,
};
