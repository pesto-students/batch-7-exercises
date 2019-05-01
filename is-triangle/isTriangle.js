
function isTriangle(...args) {
  if(args[0]+args[1]>args[2])
  {
    if(args[1]+args[2]>args[0])
    {
      if(args[0]+args[2]>args[1])
      {
        return true;
      }
      else
      {
        return false;
      } 
    }
    else
    {
        return false;
    }
  }
  else
  {
    return false;
  } 
}

export {
  isTriangle,
};
