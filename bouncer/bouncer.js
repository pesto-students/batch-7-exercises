
function bouncer(array) {
  var filteredArray
  filteredArray = array.filter((element)=>{
    return element ? true : false
  })
  return filteredArray
}

export {
  bouncer,
};
