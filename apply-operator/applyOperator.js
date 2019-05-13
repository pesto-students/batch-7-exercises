import { error } from "util";

function applyOperator(operator, ...args) {
  var answer;
  switch (operator) {
    case "+": {
      answer = 0;
      args.forEach(element => {
        answer = answer + element;
      });
      break;
    }
    case "-": {
      answer = 0;
      args.forEach(element => {
        answer = answer - element;
      });
      break;
    }
    case "*": {
      answer = 1;
      args.forEach(element => {
        answer = answer * element;
      });
      break;
    }
    case "/": {
      answer = args[0];
      args.forEach(element => {
        answer = answer / element;
      });
      answer = parseFloat(answer.toFixed(4));
      break;
    }
    case "%": {
      answer = args[0];
      for (var i = 1; i < args.length; i++) {
        answer = answer % args[i];
      }
      break;
    }
    default:
      throw error;
  }

  return answer;
}

export { applyOperator };
