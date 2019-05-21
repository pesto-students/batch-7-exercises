const fs = require('fs');

function getFilesWithExtension(files, fileExtension) {
  const matchingFiles = [];
  files.forEach((fileName) => {
    if (fileName.includes(fileExtension)) {
      matchingFiles.push(fileName);
    }
  });
  return matchingFiles;
}

function filteredNames(directoryName, fileExtension) {
  const fileList = fs.readdirSync(directoryName);
  return getFilesWithExtension(fileList, fileExtension);
}

export { filteredNames };
