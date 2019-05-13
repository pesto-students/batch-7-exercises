import { template } from "handlebars";

function objectPairs(obj) {
 var arr = [];
 let arrayOfObjectPairs = [];
 for (let key in obj) {
   arr.push(key,obj[key]);
   arrayOfObjectPairs.push(arr);
   arr = [];
 }
 return arrayOfObjectPairs;
}

export {
  objectPairs,
};
