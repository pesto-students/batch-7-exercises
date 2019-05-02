
function objectKeys(obj) {
  let finalArrray=[];
  for(let key in obj){
  	finalArrray.push(key);
  }
  return finalArrray;
}

export {
  objectKeys,
};
