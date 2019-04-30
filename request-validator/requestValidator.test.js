import { requestValidator } from './requestValidator';

describe('requestValidator', () => {
  const validRequest = {
    method: 'GET',
    uri: 'www.google.com',
    version: 'HTTP/1.1',
    message: '',
  };
  test('should throw error if method is invalid', () => {
    const request = {
      ...validRequest,
      method: 'GIVE',
    };
    expect(() => requestValidator(request)).toThrow('Invalid request header: Invalid Method');
  });

  test('should throw error if url is invalid', () => {
    const request = {
      ...validRequest,
      uri: 'abcd$#@ a',
    };
    expect(() => requestValidator(request)).toThrow('Invalid request header: Invalid URI');
  });

  test('should throw error if message is not present', () => {
    const request = {
      method: 'GET',
      uri: 'google.com',
      version: 'HTTP/0.9',
    };
    expect(() => requestValidator(request)).toThrow('Invalid request header: Invalid Message');
  });

  test('should return the request object as is if it is a valid request body', () => {
    const actual = requestValidator(validRequest);
    expect(validRequest).toBe(actual);
  });
});
