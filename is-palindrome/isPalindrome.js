
function isPalindrome(...args) {
	var string=args[0];
	const mid=Math.floor(string.length/2);
	for(let i=0;i<mid;i++){
		if(string[i]!== string[string.length-1-i]){
			return false;
		}
	}
	return true;
}

export {
  isPalindrome,
};
