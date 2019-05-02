
function mapObject(obj,cb) {
  let finalObject={};
  for(let key in obj){
  	finalObject[key]=cb(obj[key]);
  }
  return finalObject;
}

export {
  mapObject,
};
