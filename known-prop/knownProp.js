
function knownProp(obj) {
  const handler = {
    get : function(obj,prop) {
      if(!obj.hasOwnProperty(prop)) {
        throw TypeError("Unkown Property")
      }
      return obj[prop]
    }
  }
  const proxy = new Proxy(obj,handler)
  return proxy
}

export {
  knownProp,
};
