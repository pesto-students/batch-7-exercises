

function mapObject(obj, el) {
 for( let attribute in obj) {
   obj[attribute] = el(obj[attribute]);
 }
  return obj;
}

export {
  mapObject,
};
