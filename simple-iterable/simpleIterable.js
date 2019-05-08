
function simpleIterable() {
  const obj = {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          if ( i > 4 ) {
            return { value : undefined, done : true};
          }
          else {
            i = i + 1;
            return { value : i, done : false};
          }
        }
      }
      }
    }
    return obj;
}

export {
  simpleIterable,
};
 