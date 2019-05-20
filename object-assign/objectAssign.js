
function objectAssign(...objects) {
  const newObject = objects[0];
  for (let object of objects) {
    Object.assign(newObject,object);
  }
  return newObject;
}


export {
  objectAssign,
};
