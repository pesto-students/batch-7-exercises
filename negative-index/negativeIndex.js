import { isArray } from "util";

function negativeIndex(obj) {
  const handler = {
    get : function(obj,index) {
      if(Array.isArray(obj) === "false") {
        throw TypeError("Only arrays are supported")
      }
      if(index < 0) {
        return obj[obj.length - 2]
      }
      return obj[index]
    }

  }
  const proxy = new Proxy(obj,handler)
  return proxy
}

export {
  negativeIndex,
};
