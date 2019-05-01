
function applyOperator(...args) {
  	var length=args.length;
	var operator=args[0];
	var result=args[1];
	if(args[2]){


		for(let i=2;i<length;i++){
			if(operator === '+'){
				result = result + args[i];
			}else if(operator === '-'){
				result =result - args[i];
			}else if(operator === '/'){
				result = result / args[i];
			}else if(operator === '*'){
				result =result * args[i];
			}else if(operator === '%'){
				result =result % args[i];
			}

		}
	}
	return result;



}

export {
  applyOperator,
};
