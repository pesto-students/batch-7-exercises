
function createStudent(obj) {
  let student = {};
  student.likesES2015 =  false;
  student.likesJavaScript = false; 

  let comleteStatement = '';
  comleteStatement = (!student.likesES2015 && !student.likesJavaScript)?'does not like much...':'likes ';

  return `The student ${comleteStatement} ${student.likesJavaScript?'JavaScript':''}
  ${(student.likesJavaScript && student.likesES2015)?' and ':''}
  ${student.likesES2015?'ES2015':''}`;
}

export {
  createStudent,
};
