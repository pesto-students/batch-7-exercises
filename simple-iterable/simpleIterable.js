
const simpleIterable = {
  
}
simpleIterable[Symbol.iterator] = function() {
  let count = 1 ;
  return {
    next : function() {
      if( count < 5) {
        count += 1;
        return {value : count ,done : false};
      } else {
        return {done : true};
      }
    }
  }
}

export {
  simpleIterable,
};
