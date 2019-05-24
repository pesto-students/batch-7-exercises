function booleanExpressionEvaluator(booleanStr) {
  if (!typeof booleanStr === 'string') {
    throw new Error('Not provided string as input');
  }
  // const val = eval(booleanStr);
  // return !!val;
}

// function getLiteralsValue(word) {
//   if (word === 'true' || word === '!false') {
//     return true;
//   }
//   if (word === 'false' || word === '!true') {
//     return true;
//   }
//   return false;
// }

export { booleanExpressionEvaluator };
