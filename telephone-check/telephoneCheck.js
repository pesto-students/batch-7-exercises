function telephoneCheck(telephone) {
  const pattern = /^((1 )?)((\([0-9]{3}\))|([0-9]{3}))(( |-)?)([0-9]{3})( |-)?([0-9]{4})$/;
  return pattern.exec(telephone) !== null;
}

export { telephoneCheck };
