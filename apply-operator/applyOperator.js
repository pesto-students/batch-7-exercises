
function applyOperator(operator,...operands) {
  var result = 0; 
  

  if(operands.length == 0 && operator != undefined) {
    return 0;
  }

  switch(operator) {
    case '+':
    {
      result = operands.reduce((accumulator, currentValue) => {
        return accumulator + currentValue 
      });
      break;
    } 
    case '-':
    {
      result = operands.reduce((accumulator, currentValue) => {
        return accumulator - currentValue 
      },0);
      break;
    }
    case '%':
    {
      result = operands.reduce((accumulator, currentValue) => {
        return accumulator % currentValue 
      });
      break;
    }
    case '/':
    {
      result = parseFloat(operands.reduce((accumulator, currentValue) => {
        return accumulator / currentValue 
      }).toFixed(4));
      break;
    }
    case '*':
    {
      result = operands.reduce((accumulator, currentValue) => {
        return accumulator * currentValue 
      });
      break;
    }
    default:
     {
      throw Error;
     }
  }

  return result;
}

export {
  applyOperator,
};
