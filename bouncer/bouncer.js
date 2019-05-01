
function bouncer(...args) {
	const elements=args[0];
	return elements.filter((element)=> !!element);
}

export {
  bouncer,
};
