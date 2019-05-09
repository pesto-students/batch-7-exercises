
function isPalindrome(args) {
  debugger
  let result = false;
  if(typeof args === 'string'){
    const stripSpecialChars = args.toLowerCase().replace(/[^a-z]/g, "");
    let stringArray = stripSpecialChars.split(""); 
    let reverseString = stringArray.slice().reverse().toString();
    result =  stringArray.toString() === reverseString;
  }
  else if(typeof args === 'number'){
    let stringNumbers =  (""+args).split("");
    result =  stringNumbers.toString() == stringNumbers.slice().reverse().toString();
  }
  return result; 
}

export {
  isPalindrome,
};
