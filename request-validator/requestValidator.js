function isValidHTTPMethod(httpRequestObject) {
  const validMethods = ['GET','PUT','POST','DELETE','PATCH'];
  return validMethods.includes(httpRequestObject.method);
}


function isValidUri(httpRequestObject) {
  return /^(https?:\/\/)?([a-z\d]([a-z\d-.]?[a-z\d])*\.[a-z]([a-z\.]?[a-z])*){2,255}(\/[\w-\.~!$&'()*+,;=:@%]*)*$/i.test(httpRequestObject.uri);
}

function isMessagePresent(httpRequestObject) {
  return httpRequestObject.hasOwnProperty('message');
}


function requestValidator(httpRequestObject) {

  let errorMessage = 'Invalid request header:';
  if (!isValidHTTPMethod(httpRequestObject)) {
    throw new Error(`${errorMessage} Invalid Method`);
  } 
  if (!isMessagePresent(httpRequestObject)) {
    throw new Error(`${errorMessage} Invalid Message`);
  }
  if (!isValidUri(httpRequestObject)) {
    throw new Error(`${errorMessage} Invalid URI`);
  }

  return httpRequestObject;
}

export {
  requestValidator,
};
