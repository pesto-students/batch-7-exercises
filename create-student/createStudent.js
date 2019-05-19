
function createStudent(obj) {
  debugger
  let student = {};
  if(obj !== undefined){
    student.likesES2015 =  obj.hasOwnProperty('likesES2015')?obj.likesES2015:true;
    student.likesJavaScript = obj.hasOwnProperty('likesJavaScript')?obj.likesJavaScript:true;   
    if((!student.likesES2015 && !student.likesJavaScript)){
      return 'The student does not like much...';
    }
    else{
      return `The student likes ${student.likesJavaScript?'JavaScript':''}${(student.likesJavaScript && student.likesES2015)?' and ':''}${student.likesES2015?'ES2015':''}!`; 
    }  
  }
  else{
    return 'The student likes JavaScript and ES2015';
  }
}

export {
  createStudent,
};
