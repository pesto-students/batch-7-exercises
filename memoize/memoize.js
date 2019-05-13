
function memoize(inputFunction) {
  var cache = {}
  return (...args) =>{
      let n = args.toString()
      if(n in cache) {
        return cache[n]
      } 
      else {
        var result = inputFunction(...args)
        cache[n] = result
        return result
      }
  }
  
}

export {
  memoize,
};
