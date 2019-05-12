
class Person{
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
  addDobDigits() {
    let splittedDigits = this.dateOfBirth.split('')
    let sum = 0
    splittedDigits.map((number)=> {
      if(number !== '/')
      return sum += parseInt(number)
    })
    return sum

  }
}

export {
  Person,
};
