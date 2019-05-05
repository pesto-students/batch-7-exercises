function filterOutFalsyValues(value){
  return ((typeof(value) === 'string' || typeof(value) === 'number' || typeof(value) === 'object') && (typeof(value) !== NaN && typeof(value) !== null) )
}


function bouncer(arr) {
  arr = arr.filter((value)=> {
    if( value !== NaN || value !== undefined || value !== false || value !== 0 || value !== null) {
      return value;
    }
  });
  return arr;
}

export {
  bouncer,
};
//bouncer([7,"ate",9]);