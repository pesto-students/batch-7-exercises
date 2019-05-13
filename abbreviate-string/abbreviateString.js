
function abbreviateString(string) {
	if(typeof (string) === 'string'){
  		var stringArr=string.split(' ');
  		return `${stringArr[0]} ${stringArr[stringArr.length-1][0].toUpperCase()}.`
	}
	throw new Error();

}

export {
  abbreviateString,
};
