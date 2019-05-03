import { throwError } from "rxjs";

function squareNumbersArray(arr) {
  
    var newArray =  arr.map(squareNumber);
    return newArray;
  } 

function squareNumber(n){
  if(isNumber(n))
  { 
    return Math.pow(n,2);
  } 
}

function isNumber(elements)
{
  return typeof elements === 'Number'
}

export {
  squareNumbersArray,
};
