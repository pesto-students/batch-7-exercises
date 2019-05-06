
function createStudent(obj) {
  if(obj === undefined) {
    return ('The student likes JavaScript and ES2015');
  }
   if(obj.likesES2015 === false && (obj.likesJavascript === undefined || obj.likesJavascript === true)) {
    return ('The student likes JavaScript!');
  }
   if((obj.likesES2015 === undefined || obj.likesES2015 === true) && obj.likesJavascript === false) {
    return ('The student likes ES2015!');
  }
   if(obj.likesES2015 === undefined && obj.likesJavascript === false) {
    return ('The student does not like much...');
  }
}

export {
  createStudent,
};
