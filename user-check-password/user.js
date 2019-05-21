function User(userName, password) {
  this.username = userName;
  this.password = password;
}

User.prototype.checkPassword = function checkPassword(enteredPassword) {
  return this.password === enteredPassword;
};

export { User };
