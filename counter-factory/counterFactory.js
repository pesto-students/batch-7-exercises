
function counterFactory() {
  var counter = 0
  function incrementCounter(){
    return counter += 1
  }
  function decrementCounter(){
    return counter -= 1
  }
  return {
    incrementCounter,decrementCounter
  }

}

export {
  counterFactory,
};
