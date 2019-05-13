
function setDefaultProperty(object, defaultValue) {
  const handler = {
    get : function(obj, prop) {
      if(obj.hasOwnProperty(prop)){
        return obj[prop]
      }
      return defaultValue
    }
  }
  const p = new Proxy(object, handler)
  return p
}
export {
  setDefaultProperty,
};