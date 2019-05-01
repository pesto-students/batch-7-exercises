
function applyOperator(op,...args) {

  var ans;
  switch(op){
    case '+':
      ans = 0;
          args.forEach(element => {
            ans = ans + element;
        });
      break;
    case '-':
      ans = 0;
          args.forEach(element => {
            ans = ans - element;
        });
      break;
    case '*':
      ans = 1;
          args.forEach(element => {
            ans = ans * element;
        });
      break;
    case '/':
      ans = args[0];
        args.forEach(element => {
          ans = ans / element;
      });
      ans = parseFloat(ans.toFixed(4));

      break;
    case '%':
      ans = args[0];
       for(var i=1; i< args.length;i++){
         ans = ans % args[i];
       }
      break;
    default :
       throw error;
  }

  return ans;
}

export {
  applyOperator,
};
