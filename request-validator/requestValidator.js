function hasAllProperties(httpRequestObj) {
  var errorObj = {
    hasError: false,
    message: "Invalid request header: Invalid "
  };
  if (!httpRequestObj.hasOwnProperty("method")) {
    errorObj.hasError = true;
    errorObj.message += "Method";
  } else if (!httpRequestObj.hasOwnProperty("uri")) {
    errorObj.hasError = true;
    errorObj.message += "URI";
  } else if (!httpRequestObj.hasOwnProperty("version")) {
    errorObj.hasError = true;
    errorObj.message += "Version";
  } else if (!httpRequestObj.hasOwnProperty("message")) {
    errorObj.hasError = true;
    errorObj.message += "Message";
  } else {
    errorObj.message = "";
  }
  return errorObj;
}

function isValidMethod(method) {
  var validMethods = ["GET", "POST", "DELETE", "PUT", "PATCH"];
  return validMethods.indexOf(method.toUpperCase()) == -1 ? false : true;
}

function isValidUrl(uri) {
  return /^(https?:\/\/)?([a-z\d]([a-z\d-.]?[a-z\d])*\.[a-z]([a-z\.]?[a-z])*){2,255}(\/[\w-\.~!$&'()*+,;=:@%]*)*$/i.test(
    uri
  );
}

function isValidVersion(version) {
  var validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  return validVersions.indexOf(version.toUpperCase()) == -1 ? false : true;
}

function isValidMessage(message) {
  return !/[<>&'"\\]/.test(message);
}

function requestValidator(httpRequestObj) {
  var errorMessage = "Invalid request header: Invalid ";
  var errorObj = hasAllProperties(httpRequestObj);
  if (errorObj.hasError) {
    throw new Error(errorObj.message);
  }

  if (!isValidMethod(httpRequestObj.method)) {
    throw new Error(errorMessage + "Method");
  }

  if (!isValidUrl(httpRequestObj.uri)) {
    throw new Error(errorMessage + "URI");
  }

  if (!isValidVersion(httpRequestObj.version)) {
    throw new Error(errorMessage + "Version");
  }

  if (!isValidMessage(httpRequestObj.message)) {
    throw new Error(errorMessage + "Message");
  }

  return httpRequestObj;
}

export { requestValidator };
