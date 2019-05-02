
function applyOperator(operator,numbers) {
  var b = 0
  if(operator === "+"){
    return numbers.reduce((a)=>{
      b = b+a
    });
  }

}

export {
  applyOperator,
};
