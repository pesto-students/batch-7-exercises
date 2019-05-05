
function isPalindrome(element) {
  element = typeof(element) === 'string' ? element.toLowerCase() : element;
  element = element.replace(/[^a-zA-Z0-9]/g, '');
  console.log(element);
  var reverseOfElement = element.split('').reverse().join('');
  return (reverseOfElement === element);
}

export {
  isPalindrome,
};
