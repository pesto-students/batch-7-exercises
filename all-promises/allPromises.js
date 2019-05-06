import { resolve } from "path";

function allPromises(args) {
  debugger 
if(args === undefined){
  return new Promise(function(resolve,reject){
     resolve();
  })
} 
Promise.all([args[0], args[1], args[2]]).then(values => {
  return values;
}); 
}

export {
  allPromises,
};
