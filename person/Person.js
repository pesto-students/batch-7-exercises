class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    let totalSum = 0;
    for (const char of this.dateOfBirth) {
      if (!isNaN(char)) {
        totalSum += parseInt(char, 10);
      }
    }
    return totalSum;
  }
}
export {
  Person,
};
