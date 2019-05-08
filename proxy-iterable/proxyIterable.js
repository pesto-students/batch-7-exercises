
function proxyIterable(FnArray) {
  var ret = [];
   return {
     increment(val){
      FnArray.forEach(function(fn){
        ret.push(fn().increment(val));
      });
      return ret;
     }
   }
}

export {
  proxyIterable,
};
