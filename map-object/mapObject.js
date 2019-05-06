
function mapObject(obj, el) {
  var arrayOfValues = Object.values(obj);
  arrayOfValues = arrayOfValues.map(el);
  var arrayOfKeys = Object.keys(obj);
  //obj = Object.assign(arrayOfValues);
  
  
}

// export {
//   mapObject,
// };
const obj = {
  x: 2,
  y: 5,
  z: 10,
};
mapObject(obj, n => (n * n));