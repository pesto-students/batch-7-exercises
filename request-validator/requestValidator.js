const PROPERTIES = ['method', 'uri', 'version', 'message'];
const METHODS = ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'];
const VERSIONS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
const URIRegex = /^(https?:\/\/)?([a-z\d]([a-z\d-.]?[a-z\d])*\.[a-z]([a-z.]?[a-z])*){2,255}(\/[\w-.~!$&'()*+,;=:@%]*)*$/i;
const SpecialCharRegex = /[<>&'"\\]/;
const ErrorMsgCodeForProps = {
  method: 'Method',
  uri: 'URI',
  version: 'Version',
  message: 'Message',
};

const errorWithMessage = error => new Error(`Invalid request header: Invalid ${ErrorMsgCodeForProps[error]}`);

const getMissingProperties = httpRequest => PROPERTIES
  .filter(prop => !Object.prototype.hasOwnProperty.call(httpRequest, prop));

const isValidMethod = method => METHODS.includes(method);
const isValidURI = uri => URIRegex.test(uri);
const isValidVersion = version => VERSIONS.includes(version);
const isValidMessage = msg => !SpecialCharRegex.test(msg);

function requestValidator(httpRequest) {
  const missingProperties = getMissingProperties(httpRequest);

  if (missingProperties.length > 0) {
    const firstMissingProp = missingProperties[0];
    throw errorWithMessage(firstMissingProp);
  }

  const {
    method, uri, version, message,
  } = httpRequest;

  if (!isValidMethod(method)) throw errorWithMessage('method');
  if (!isValidURI(uri)) throw errorWithMessage('uri');
  if (!isValidVersion(version)) throw errorWithMessage('version');
  if (!isValidMessage(message)) throw errorWithMessage('message');
  return httpRequest;
}

export { requestValidator };
