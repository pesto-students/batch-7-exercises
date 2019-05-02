
function objectPairs(obj) {
  let finalArray=[];
  for(let key in obj){
  	var objProperty=[key,obj[key]];
  	finalArray.push(objProperty);
  }
  return finalArray;
}

export {
  objectPairs,
};
