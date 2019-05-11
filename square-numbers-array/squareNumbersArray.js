import { throwError } from "rxjs";
function squareNumber(n){
  if(isNumber(n)) { 
    return Math.pow(n,2);
  }
  else {
    throw new Error('My custom error');
  } 
}

function squareNumbersArray(numbers) { 
  if(!Array.isArray(numbers)){
    throw new Error('My custom error');
  }
    var newArray =  numbers.map(el=> squareNumber(el));
    return newArray;
  } 



function isNumber(elements) {
  return typeof elements === 'Number'
}

export {
  squareNumbersArray,
};
