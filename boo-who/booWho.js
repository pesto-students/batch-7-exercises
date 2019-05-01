
function booWho(...args) {
  for( var i=0; i<args.length; i++){
    if(typeof(args[i])=== 'boolean'){
      return true;
    }
    else
    return false;
  }
}

export {
  booWho,
};
