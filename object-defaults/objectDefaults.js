
function objectDefaults(obj1, obj2) {
  Object.freeze(obj1);
    return(Object.assign(obj2,obj1));
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