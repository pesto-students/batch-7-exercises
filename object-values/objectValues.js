
function objectValues(obj) {
  let finalArray=[];
  for(let key in obj){
  	if(key=== obj[key]){
  		finalArray.push(key);
  	}else{
  		finalArray.push(null);
  	}
  }
  return finalArray;
}

export {
  objectValues,
};
