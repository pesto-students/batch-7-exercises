
function objectInvert(...args) {
  
  var newData = Object.keys(args).reduce(function(obj,key){
    obj[ args[key] ] = key;
    return obj;
 },{});
}

// export {
//   objectInvert,
// };
const obj = {
  x: 'hi',
  y: 'sup',
  z: 'yo',
};
const result = objectInvert(obj);
