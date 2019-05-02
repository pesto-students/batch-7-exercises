import { objectExpression } from "@babel/types";

function mapObject(inputObject,inputFunction) {
  
 return Object.keys(inputObject).forEach((key)=>{
   inputFunction(obj[key])
 })
}

export {
  mapObject,
};
