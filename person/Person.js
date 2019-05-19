

class Person {
  constructor(...props) {
    this.obj = {
      firstName: props[0],
      lastName: props[1],
      dob: props[2]
    } 
  }
  addDobDigits() {
    const arrayDob = this.obj.dob.split('');
    var sum = 0;
    for ( let i = 0; i < arrayDob.length; i ++) {
     // console.log(typeof arrayDob[0]);
      if (typeof parseInt(arrayDob[0]) === 'number' ) {
        sum += parseInt(arrayDob[i]);
      }
    }
    console.log(sum);
    
  }


}

// export {
//   person,
// };
const nishant = new Person('Nishant', 'Salhotra', '5/11/1994');
nishant.addDobDigits();