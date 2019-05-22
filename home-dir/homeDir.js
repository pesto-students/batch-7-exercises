const os = require('os');

function homeDir() {
  return os.homedir();
}

export { homeDir };
