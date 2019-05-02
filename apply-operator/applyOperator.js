
function applyOperator(operator,operands) {
  var result = 0;
  
  if(operands == undefined)
  {
    return 0;
  } 
  
  switch(expression) {
    case '+':
    {
      for(var i=0;i<operands.length;i++)
      {
        result = result + operands[i];
      }
      break;
    } 
    case '-':
    {
      for(var i=0;i<operands.length;i++)
      {
        result = result - operands[i];
      }
      break;
    }
    case '%':
    {
      for(var i=0;i<operands.length;i++)
      {
        if(i==0)
        {
          result = operands[i];
        }
        else
        {
          result = result % operands[i];
        } 
      }
      break;
    }
    case '/':
    {
      if(i==0)
      {
        result = operands[i];
      }
      else
      {
        result = result / operands[i];
      } 
      break;
    }
    case '*':
    {
      for(var i=0;i<operands.length;i++)
      {
        if(i==0)
        {
          result = operands[i];
        }
        else
        {
          result = result * operands[i];
        } 
      }
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
