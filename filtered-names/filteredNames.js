const fs = require('fs');

function filteredNames(directoryPath, fileExt) {
  const fileExtToLower = fileExt.toLowerCase();
  const matchedFiles = [];
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const splitFileName = file.split('.');
    const ext = splitFileName[splitFileName.length - 1];
    if (ext.toLowerCase() === fileExtToLower) {
      matchedFiles.push(file);
    }
  });

  return matchedFiles;
}

export { filteredNames };
