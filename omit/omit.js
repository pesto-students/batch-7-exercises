//[WIP]:


function omit(keysArray, obj) {
  for ( let value of keysArray) {
    console.log (value.toString());
     delete obj.value;
  }
  console.log(obj); 
}

// export {
//   omit,
// };
const obj = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6,
};
omit(['a', 'c', 'f'], obj);