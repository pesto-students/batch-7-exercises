import { error } from "util";

function applyOperator(op,...args) {
  var ans=0;
  switch(op){
    case '+':
    ans = 0;
    args.forEach(item => {
      ans= ans+item;
    });
    break;
    case '-':
    args.forEach(item => {
      ans= ans-item;
    });
    break;
    case '*':
    ans=1;
    args.forEach(item => {
      ans= ans*item;
    });
    break;
    case '/':
    ans = args[0];
    args.forEach(item => {
      ans= ans/item;
    });
    ans = parseFloat(ans.toFixed(4));
    break;
    case '%':
    ans = args[0];
    for(var i=1;i<args.length;i++){
      ans = ans % args[i];    
    }
    break;
    default:
    throw error;
  }
  return ans;
}

export {
  applyOperator,
};
