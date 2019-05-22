const fs = require('fs');

function linesInFile(filePath) {
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const contentArray = fileContent.split('');
  return contentArray.filter(char => char === '\n').length;
}

export { linesInFile };
