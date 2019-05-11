
function memoize(inputFunction) {
  var cache = {}
  return (n) =>{
      if(n in cache) {
        return cache[n]
      } 
      else {
        var result = inputFunction(n)
        cache[n] = result
        return result
      }
  }
  
}

export {
  memoize,
};
