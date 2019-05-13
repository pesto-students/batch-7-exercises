function savingsAccount(...args) {
  return args;
}

class SavingsAccount {
  constructor(accountNumber, email, firstName, lastName) {
    this.accountNumber = accountNumber;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.products = [];
  }
  get accountNumber() {
    return this._accountNumber;
  }
  set accountNumber(value) {
    if (value.length == 6) {
      this._accountNumber = value;
    } else {
      throw new Error("Account Number must be a 6-digit number");
    }
  }

  get email() {
    return this._accountNumber;
  }
  set email(value) {
    var regexpForEmail = /^[a-z]+[\_a-zA-Z0-9\.\-]*@[a-zA-Z0-9\_\.\-]{3,}\.[a-z]{2,5}$/i;
    if (!regexpForEmail.test(value)) {
      throw new Error("Invalid e-mail");
    }
    this._email = value;
  }

  get firstName() {
    return this._accountNumber;
  }
  set firstName(value) {
    var regexpForName = /^[a-zA-Z]{3,20}$/;
    if (!regexpForName.test(value)) {
      throw new Error("First name must be between 3 and 20 characters long");
    }
    this._firstName = value;
  }

  get lastName() {
    return this._accountNumber;
  }
  set lastName(value) {
    var regexpForName = /^[a-zA-Z]+$/;
    if (!regexpForName.test(value)) {
      throw new Error("Last name must contain english alphabets only");
    }
    this._lastName = value;
  }
}

export { SavingsAccount };
