
function hasValidMethod(method) {
  return (method === 'GET' || method === 'POST' || method === 'DELETE');
}

function hasValidUri(uri) {
  return (uri.includes('.') || uri === '')
}

function requestValidator(httpObject) {
  if (!hasValidMethod(httpObject.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }
  else if (!hasValidUri(httpObject.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }
  else if (httpObject.message === '') {
    throw new Error('Invalid request header: Invalid Message');
  }
  else if (!(httpObject.hasOwnProperty(message))) {
    throw new Error('Invalid request header: Invalid Message');
  }
  return httpObject;
}

export {
  requestValidator,
};
