const isNumber = char => /^\d$/.test(char);

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth
      .split('')
      .filter(isNumber)
      .reduce((sum, dobDigit) => sum + parseInt(dobDigit, 10), 0);
  }
}

export {
  Person,
};
