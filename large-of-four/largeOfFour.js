
function largeOfFour(...args) {
	let arrays=args[0];
	return arrays.map((array)=> {
		array.sort(function(a, b) {
	    	return a - b;
	    });
		return array[array.length-1]
	});
}

export {
  largeOfFour,
};
