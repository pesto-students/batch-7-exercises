
function counterFactory() {
  var counter = 0
   return {
     increment : () => {
       return counter += 1
     },
     decrement : () =>{
       return counter -= 1
     }
   }
 }
export {
  counterFactory,
};
