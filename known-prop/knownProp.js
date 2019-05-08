function knownProp(obj) {
  var handler = {
    get: function(obj, prop) {
        if(prop in obj) {
         return obj[prop];
        }
        else {
          throw TypeError('Unknown property');
        } 
    }
  }; 
  return new Proxy(obj,handler);
}

export {
  knownProp,
};
