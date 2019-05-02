
function mapObject(obj,updateObjValues) {  
  for (var attrname in obj) 
  { 
    obj[attrname] = updateObjValues(obj[attrname]); 
  }
  return obj;
}

export {
  mapObject,
};
