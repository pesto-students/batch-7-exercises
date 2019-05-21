const fs = require('fs');
const path = require('path');

function filteredNamesRecursive(directoryPath, fileExt) {
  const fileExtToLower = fileExt.toLowerCase();
  let matchedFiles = [];
  const files = fs.readdirSync(directoryPath, { withFileTypes: true });
  files.forEach((file) => {
    if (file.isDirectory()) {
      const nestedDirPath = path.join(directoryPath, file.name);
      matchedFiles = matchedFiles.concat(filteredNamesRecursive(nestedDirPath, fileExtToLower));
    } else {
      const splitFileName = file.name.split('.');
      const ext = splitFileName[splitFileName.length - 1];
      if (ext.toLowerCase() === fileExtToLower) {
        matchedFiles.push(file.name);
      }
    }
  });

  return matchedFiles;
}
export { filteredNamesRecursive };
