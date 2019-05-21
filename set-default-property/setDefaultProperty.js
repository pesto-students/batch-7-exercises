
function setDefaultProperty(object, defaultValue) {
  const handler = {
    get : function(obj, prop) {
      return prop in obj ? obj.prop : defaultValue
    }
  }
  const p = new Proxy(object, handler)
}
export {
  setDefaultProperty,
};