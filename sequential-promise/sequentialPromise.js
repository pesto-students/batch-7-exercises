
function sequentialPromise(promise1,promise2,promise3) {  
  // return args[0]().then((val)=>args[1](val).then((d)=>args[2](d).then((v)=> {
  //   return v
  // });
function sumofArray(sum, num) { 
    return sum + num; 
}  

Promise.all([promise1, promise2, promise3]).then(function(values) {
  return values,reduce(sumofArray);
}); 
}

export {
  sequentialPromise,
};
