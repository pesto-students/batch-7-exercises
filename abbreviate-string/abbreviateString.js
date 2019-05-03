try{
function abbreviateString(stringToAbbreviate) {
  var splittedStringArray = stringToAbbreviate.split(" ")
  var abrreviatedString = ""
  if(typeof abbreviateString.arguments == "number" || abbreviateString.arguments == "null" )
  {
    throw Error("Not a valid input")
  }
  splittedStringArray.map((element)=>{
     if(splittedStringArray.indexOf(element) = 0){
       abbreviateString += element
     }
     else{
       if(splittedStringArray.indexOf(element) = splittedStringArray.length){
         abbreviateString += element.substring(0,1)
       }
     }
  })
}

}
catch(e){
 return e
}

export {
  abbreviateString,
};
