
function createStudent(obj) {
  if(!obj[likesES2015]) {
    return "The student likes Javascript!"
  }
  else if(!obj[likesJavascrit]) {
    return "The student likes ES2015!"
  }
  else if(!obj[likesJavascrit] && !obj[likesES2015]) {
    return "The student doesnt like much..."
  }
  else {
    return "The student likes Javascript and ES2015"
  }
}

export {
  createStudent,
};
