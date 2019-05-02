import { throwError } from "rxjs";

function applyOperator(operator,...args) {
  debugger;
  if (!operator) {
    throw new Error;
  }

  if (args.length ==0 ) {
    return 0;
  }

  let operation = {
    '+' : args.reduce((accumulator,element) =>(accumulator+=element),0),
    '-' : args.reduce((accumulator,element) =>(accumulator-=element),0),
    '/' : parseFloat(args.reduce((accumulator,element) =>(accumulator/=element),args[0]).toFixed(4)),
    '*' : args.reduce((accumulator,element) =>(accumulator*=element),1),
    '%' : args.length == 1 ? args[0] : args.reduce((accumulator,element)=> (accumulator %=element),args[0])
  }

  return operation[operator] || throwError;
}


export {
  applyOperator,};
