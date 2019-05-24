
function doesEndWith(value, args) {
  if ( typeof args === 'string') {
    const arrayOfString = args.split('');
    const arrayOfValue = value.split('');
    const lengthOfValue = value.length;
    let k = 0;
    for ( let i = arrayOfString.length - lengthOfValue; i < arrayOfString.length; i ++) {
      if (arrayOfValue[k] !== arrayOfString[i]) {
        return false;
      }
      k ++;
    }
    return true;
  }
  else if ( args instanceof Array) {
    const lengthOfValue = value.length;
    let k = 0;
    for ( let i = args.length - lengthOfValue; i < args.length; i ++) {
      if (value[k] !== args[i]) {
        return false;
      }
      k ++;
    }
    return true;
  }
}

export {
  doesEndWith,
};
