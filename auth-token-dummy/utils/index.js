const bcrypt = require('bcrypt');

const saltRounds = 10;

const encrypt = data => bcrypt.hashSync(data, saltRounds);

module.exports = {
  encrypt,
};
