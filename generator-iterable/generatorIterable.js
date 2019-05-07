
function generatorIterable(...args) {
  generatorIterable[Symbol.iterator] = function() {
    let i = 0
    next : function() {
        i++
        if(i <= 5) {
          return{ value : i,done : false}
        }
        else {
          return{ done : false}
        }
    }
  }
}

export {
  generatorIterable,
};
