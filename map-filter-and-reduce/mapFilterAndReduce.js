
function mapFilterAndReduce(personArray) {
  let firstNameObject = {}
  personArray.map((person) => {
      let firstNameLength = person.firstName.length
      if(firstNameLength < 5) {
        firstNameObject.firstName = person.firstName
        firstNameObject.firstNameLength = person.length
      }
  })
}

export {
  mapFilterAndReduce,
};
