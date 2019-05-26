const fs = require('fs');
  
function linesInFile(fileName) {
  const lines = fs.readFileSync(fileName,'utf-8').split('\n').length;
  return lines - 1; // excluding last newLine
}

export {
  linesInFile,
};
