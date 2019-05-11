
function counter() {
  var counterValue = 0
  function incrementCounter(){
    return counterValue += 1
  }
 return incrementCounter
}
export {
  counter,
};
