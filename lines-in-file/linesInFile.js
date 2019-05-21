//import fs from 'fs';
import lineReader from 'readline';

function linesInFile (file) {
  let numberOfLines = 0;
lineReader.createInterface({input: require('fs').createReadStream(file)});
lineReader.on('line', () => console.log('Line from file:', line));

return numberOfLines;
}



export {
  linesInFile,
};
