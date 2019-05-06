
function objectInvert(args) {
  
//   var newData = Object.keys(args).reduce(function(obj,key){
//     obj[args[key]] = key;
//  },{});
var temp;

for( var keys in args) {
  temp = keys;
  keys = args[keys];
  args[keys] = temp;
}
console.log(args);
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
