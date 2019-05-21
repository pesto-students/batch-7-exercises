const fs = require('fs');

const getExtension = (fileName) => {
  const index = fileName.lastIndexOf('.');
  return index === -1 ? '' : fileName.substr(index + 1);
};

function filteredNames(dirname, fileExtension) {
  const listOfFileNames = fs.readdirSync(dirname);

  const filteredFiles = listOfFileNames.filter(
    fileName => getExtension(fileName) === fileExtension,
  );

  return filteredFiles.sort();
}

export { filteredNames };
