
function telephoneCheck(phoneNumberString) {
  const USPhoneRegExp = /^(1\s?)?((\([\d]{3}\))|[\d]{3})[\s-]?[\d]{3}[\s-]?[\d]{4}/;
  return USPhoneRegExp.test(phoneNumberString);
}

export {
  telephoneCheck,
};
