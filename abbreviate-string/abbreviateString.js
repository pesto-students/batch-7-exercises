
  function abbreviateString(stringToAbbreviate) {
    var splittedStringArray = [] = stringToAbbreviate.split(" ")
    var abbreviatedString = ""
    
    if(typeof stringToAbbreviate !== "string" )
    {
      throw new Error("Not a valid input")
    }
    splittedStringArray.map((element)=>{
      
       if(splittedStringArray.indexOf(element) === 0){
         abbreviatedString += element
         
       }
       else{
         if(splittedStringArray.indexOf(element) === splittedStringArray.length - 1){
           abbreviatedString = abbreviatedString +" "+(element.substring(0,1)).toUpperCase()+"."
           
         }
       }
    })
    return abbreviatedString
  }
export {
  abbreviateString,
};
