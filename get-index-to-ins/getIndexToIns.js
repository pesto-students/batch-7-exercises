
function getIndexToIns(...args) {
  let elements=args[0];
  const number=args[1];
  elements.sort(function(a, b) {
    return a - b;
  });
  var index=undefined;
  for(let i=0;i<elements.length;i++){
  	if(number<=elements[i]){
  		return i;
  	}
  	index=i;
  }
  return index+1;
}

export {
  getIndexToIns,
};
