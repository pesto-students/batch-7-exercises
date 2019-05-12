class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dobToChars = this.dateOfBirth.split('');
    return dobToChars.reduce((sum, char) => {
      if (char === '/') {
        return sum;
      }
      const integer = Number.parseInt(char, 10);
      return sum + integer;
    }, 0);
  }
}

export { Person };
