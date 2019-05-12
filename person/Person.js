
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
  addDobDigits() {
    const dateInStrings = this.dateOfBirth.split('');
    return dateInStrings.reduce((sum, digit) => {
      //const isForwardSlash = () => digit === '/';
      if ( digit !== '/' ) {
        sum += parseInt(digit);
      }
      return sum;
    },0);
  }
}
export {
  Person,
};
