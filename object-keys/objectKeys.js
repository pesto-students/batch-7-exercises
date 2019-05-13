
function objectKeys(obj) {
  var arr = [];
  let arrayOfKeys = [];
  for( let keys in obj) {
    arr = keys;
    arrayOfKeys.push(arr);
    arr = [];
  }
  return arrayOfKeys;
}

export {
  objectKeys,
};
// const obj = {
//   hi: 'hi',
//   there: 'there',
//   JSFOREVER: null,
// };
// objectKeys(obj);