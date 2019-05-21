const path = require('path');

const fs = require('fs');

function filteredNames(directoryPath, fileExt) {
  const fileExtToLower = fileExt.toLowerCase();
  const matchedFiles = [];
  fs.readdirSync(directoryPath, (error, files) => {
    files.forEach((file) => {
      const splitFileName = file.split('.');
      const ext = splitFileName[splitFileName.length - 1];
      if (ext.toLowerCase() === fileExtToLower) {
        matchedFiles.push(file);
      }
    });
  });

  return matchedFiles;
}
console.log(filteredNames(path.join(__dirname, 'Directory'), 'json'));
// export { filteredNames };
