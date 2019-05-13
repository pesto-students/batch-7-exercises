import { SavingsAccount } from './SavingsAccount';

describe('SavingsAccount', () => {
  test('SavingsAccount constructs the proper object', () => {
    const myAccount = {
      _accountNumber: '123456',
      _email: 'kohli@gmail.com',
      _firstName: 'Virat',
      _lastName: 'Kohli',
      products: [],
    };
    const actualAccount = new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli');
    expect(actualAccount).toEqual(myAccount);
  });

  test('should throw error if account number length is not equal to 6', () => {
    expect(() => new SavingsAccount('123', 'kohli@gmail.com', 'Virat', 'Kohli')).toThrow('Account Number must be a 6-digit number');
  });

  test('should throw error if email address format is invalid', () => {
    expect(() => new SavingsAccount('123456', 'kohli@', 'Virat', 'Kohli')).toThrow('Invalid e-mail');
  });

  test('should throw error if length of first name is not between 3 and 20 characters.', () => {
    expect(() => new SavingsAccount('123456', 'kohli@gmail.com', 'V', 'Kohli')).toThrow('First name must be between 3 and 20 characters long');
  });

  test('should throw error if last name do not have english alphabets', () => {
    expect(() => new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli5')).toThrow('Last name must contain english alphabets only');
  });
});
