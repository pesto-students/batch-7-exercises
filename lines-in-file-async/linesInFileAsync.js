const fs = require('fs');

function linesInFileAsync(filePath) {
  return new Promise((resolve) => {
    fs.readFile(filePath, { encoding: 'utf8' }, (err, fileContent) => {
      const contentArray = fileContent.split('');
      resolve(contentArray.filter(char => char === '\n').length);
    });
  });
}

export { linesInFileAsync };
