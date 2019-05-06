
function diffArray(array1,array2) {
  let mergeArray = array1.concat(array2);
  let result = []
  mergeArray.foreach((e1) => array1.foreach((e2) => {
    console.log(e1,e2);
  }))
  // return args;
}

export {
  diffArray,
};
