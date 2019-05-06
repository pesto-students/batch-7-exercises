const legalHTTPMethods = ['GET', 'POST', 'DELETE'];
const legalHTTPversion = ['0.9', '1.0', '1.1', '2.0'];

function validateHTTPMethod(httpMethod) {
  if (!httpMethod || !legalHTTPMethods.includes(httpMethod)) {
    throw new Error('Invalid request header: Invalid Method');
  }
  return true;
}

function validateURI(uri) {
  if (!uri) {
    throw new Error('Invalid request header: Invalid URI');
  }
  const uriRegex = /[0-9]|[a-z]|\.|\*/;
  const uriArr = uri.split('');
  uriArr.forEach((char) => {
    if (!uriRegex.test(char)) {
      throw new Error('Invalid request header: Invalid URI');
    }
  });
  return true;
}

function validateHTTPversion(httpVersion) {
  if (!httpVersion) {
    throw new Error('Invalid request header: Invalid Version');
  }
  const version = httpVersion.split('/')[1];
  if (!legalHTTPversion.includes(version)) {
    throw new Error('Invalid request header: Invalid Version');
  }
  return true;
}

function validateHTTPmessage(httpMessage) {
  if (httpMessage === undefined) {
    throw new Error('Invalid request header: Invalid Message');
  }
  const httpMessageRegex = /[<|>|\\|&|'|"]/;
  const messageCharArr = httpMessage.split('');
  messageCharArr.forEach((char) => {
    if (httpMessageRegex.test(char)) {
      throw new Error('Invalid request header: Invalid Message');
    }
  });
  return true;
}

function requestValidator(httpObject) {
  validateHTTPMethod(httpObject.method);
  validateURI(httpObject.uri);
  validateHTTPversion(httpObject.version);
  validateHTTPmessage(httpObject.message);
  return httpObject;
}

export { requestValidator };
