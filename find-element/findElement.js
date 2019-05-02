
function findElement(array,cb) {
  for(let i=0;i<array.length;i++){
  	if(cb(array[i])){
  		return array[i];
  	}
  }
  return undefined;
}

export {
  findElement,
};
