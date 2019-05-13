const clubMember = {
  firstname: "John",
  lastname: "Doe",
  memberStatus: "Full",
  city: "Francisco"
};

const Sara = '{ "height":1.9, "age":36, "eyeColor":"brown"}';

// use JSON.parse() to create an object 'objectSara':
const objectSara = JSON.parse(Sara);

// var myArray = [];
// myArray[0] = 'Monday';
// myArray[1] = 'Tuesday';
// myArray[3] = 'Wednesday';
// In many other programming languages, you can use textual keys to make arrays more descriptive:

// myArray['startDay'] = 'Monday';
// JavaScript does not directly support so-called associative arrays, but we can to some extent
// simulate their behavior by using JSON notation.

const conference = {
  startDay: "Monday",
  nextDay: "Tuesday",
  endDay: "Wednesday"
};

// Take a look at the conference object listed in the code.
// You can access the individual properties of the object as if they were elements
// in an associative array: `conference['startDay']`
// Add a line of code to store the name of the conference's end day in variable endDayIs.
const endDay = conference.endDay;
const Mike = {};
Mike.height = 1.9;
Mike.age = 36;
Mike.eyecolor = "brown";

// serialize the object using JSON.stringify():
const mikeStringified = JSON.stringify(Sara);

export { clubMember, objectSara, endDay, mikeStringified };
