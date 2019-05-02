
function objectInvert(obj) {
  let finalObject={};
  for(let key in obj){
  	finalObject[obj[key]]=key;
  }
  return finalObject;
}

export {
  objectInvert,
};
