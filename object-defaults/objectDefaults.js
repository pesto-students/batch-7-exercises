
function objectDefaults(...args) {
  var obj1 = args[0];
  var obj2 = args[1];


    return(Object.assign(obj1,obj2));
}

export {
  objectDefaults,
};
// const obj = {
//   x: 'hi',
// };
// const defaultObj = {
//   banana: true,
//   x: false,
// };
// objectDefaults(obj, defaultObj);