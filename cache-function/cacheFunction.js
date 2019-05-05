
function cacheFunction(callBackFunction) {
   var cache = []
   cache.push(arguments)
   console.log(cache)
   return (args) => {
     if(cache.indexOf(args) === 0) {
       return cache
     }
     callBackFunction(args);

   }
}

export {
  cacheFunction,
};
