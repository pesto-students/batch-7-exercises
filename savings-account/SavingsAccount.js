
function savingsAccount(accountDetails) {
  
  const myAccount = {
    _accountNumber: accountDetails[0],
    _email: accountDetails[1],
    _firstName: accountDetails[2],
    _lastName: accountDetails[3],
    products: [],
  };

  if( myAccount._accountNumber.length != 6 ){
    throw Error('Account Number must be a 6-digit number');
  }
  if( myAccount._firstName.length < 3 || myAccount._firstName.length > 20 ){
    throw Error('First name must be between 3 and 20 characters long');
  }
  if( hasNumber(myAccount._lastName) ){
    throw Error('Last name must contain english alphabets only');
  }
}

function hasNumber(myString) {
  return /\d/.test(myString);
}

export {
  savingsAccount,
};
//const actualAccount = new savingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli');
