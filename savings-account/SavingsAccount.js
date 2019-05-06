
class SavingsAccount { 
  constructor(accountNumber,email,firstName,lastName,pro) { 
    debugger;
    this._accountNumber = accountNumber,
    this._email = email,
    this._firstName = firstName,
    this._lastName = lastName
  } 

  set accountNumber(newAccountNumber) {
    debugger
    if(newAccountNumber.length!=6) {
      throw 'Account Number must be a 6-digit number';
    }
    else{
      this._accountNumber = newAccountNumber; 
    } 
  }

  get email() {  
    return this._email;
  }

  set email(newEmailId) {  
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      if(!re.test(String(newEmailId).toLowerCase())){
        throw 'Invalid e-mail';
      } 
      else{
        this._email = newEmailId;
      } 
  } 
}
 

export {
  SavingsAccount,
};
