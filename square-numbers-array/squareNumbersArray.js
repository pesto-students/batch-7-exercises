
function squareNumbersArray(...arr) {

  if( (arr.every( isANumber )) === false ){
    throw Error('My custom error');
  } 
}

function isANumber(num){
  if(typeof(num) === 'number'){
    return true;
  }
  else{
    return false;
  }
}

export {
  squareNumbersArray,
};
// const myArray = [1, 2, 'string', 4];
// squareNumbersArray(...myArray);