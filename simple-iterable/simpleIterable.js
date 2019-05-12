
function simpleIterable() {
  const iterable = {}
    iterable[Symbol.iterator] = function() {
        let i = 1;
        const iterator = {
          next() {

              if(i <= 5) {
                return { value : i++, done : false}
              }
              else {
                return {done : true}
              }
          }
        }
        return iterator
      }
     return iterable; 
    } 

export {
  simpleIterable,
};
