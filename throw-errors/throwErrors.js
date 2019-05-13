
function throwErrors(...args) {
  var errorName
  try {
    var a[5] = 1
  }
  catch(e) {
     errorName = e.name
    
  }
  return errorName
}

export {
  throwErrors,
};
