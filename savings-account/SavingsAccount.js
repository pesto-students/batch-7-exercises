/* eslint-disable no-underscore-dangle */
const REGEX = {
  accountNumber: /^[0-9]{6}$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  firstName: /^[a-zA-Z]{3,20}$/,
  lastName: /^[a-zA-Z]+$/,
};

const isValidAccountNumber = accNumber => REGEX.accountNumber.test(accNumber);
const isValidEmail = email => REGEX.email.test(email);
const isValidFirstName = firstName => REGEX.firstName.test(firstName);
const isValidLastName = lastName => REGEX.lastName.test(lastName);

class SavingsAccount {
  constructor(
    accountNumber,
    email,
    firstName,
    lastName,
  ) {
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
    if (!isValidAccountNumber(value)) {
      throw new Error('Account Number must be a 6-digit number');
    }
    this._accountNumber = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    if (!isValidEmail(value)) {
      throw new Error('Invalid e-mail');
    }
    this._email = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (!isValidFirstName(value)) {
      throw new Error('First name must be between 3 and 20 characters long');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!isValidLastName(value)) {
      throw new Error('Last name must contain english alphabets only');
    }
    this._lastName = value;
  }
}

export { SavingsAccount };
