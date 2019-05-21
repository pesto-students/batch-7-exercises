const fs = require('fs');
const path = require('path');
function filteredNames(directoryPath, fileType) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.log(err);
    }
    console.log(files);
    const filteredFiles= files.filter((fileName) => fileName.includes(fileType) ? fileName : '')
    console.log(filteredFiles);
    return filteredFiles;
  }); 
}

export {
  filteredNames,
};
