
function objectKeys(obj) {
  var arr = [];
  for( let keys in obj) {
    arr = keys;
  }
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