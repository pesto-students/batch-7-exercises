const fs = require('fs');
const path = require('path');

function validFilename(fileName) {
  const filePath = path.resolve(__dirname, fileName);
  if (fileName.length === 0) {
    return false;
  }
  if (fs.existsSync(filePath)) {
    return false;
  }
  return true;
}

export { validFilename };
