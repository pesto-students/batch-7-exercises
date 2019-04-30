import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
  test('should successfully check strings and numbers', () => {
    expect(isPalindrome('eye')).toBe(true);
    expect(isPalindrome('_eye')).toBe(true);
    expect(isPalindrome('race car')).toBe(true);
    expect(isPalindrome('not a palindrome')).toBe(false);
    expect(isPalindrome('A man, a plan, a canal. Panama')).toBe(true);
    expect(isPalindrome('0_0 (: /- :) 0-0')).toBe(true);

    expect(isPalindrome(12321)).toBe(true);
    expect(isPalindrome(22)).toBe(true);
    expect(isPalindrome(2442)).toBe(true);
    expect(isPalindrome(1234)).toBe(false);
  });
});
