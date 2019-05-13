
function mapFilterAndReduce(personArray) {
  let firstNameObject = {}
  personArray.map((person) => {
      let firstNameLength = person.firstName.length
      if(firstNameLength < 5) {
      return firstNameObject[person.firstName] = person.firstName.length  
    }
  })
  return firstNameObject
}

export {
  mapFilterAndReduce,
};
