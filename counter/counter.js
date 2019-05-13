

function counter(...args) {
	var count=1;
	return function abc(){
		return	count++;
	}
} 

export {
  counter,
};
