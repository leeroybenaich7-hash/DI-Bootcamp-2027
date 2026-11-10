// ============================================================
// Week 3 - Day 1 - Exercises XP : Advanced Array Methods
// ============================================================
// What you will learn:
// Array methods
// Destructuring


// ============================================================
// 🌟 Exercise 1 : Colors
// Instructions
// Using this array :
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order :
// "1# choice is Blue." "2# choice is Green." "3# choice is Red." ect…
// Check if at least one element of the array is equal to the value "Violet".
// If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.
// ============================================================
console.log("--- Exercise 1 ---");

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}


// ============================================================
// 🌟 Exercise 2 : Colors #2
// Instructions
// Using these arrays :
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order :
// "1st choice is Blue." "2nd choice is Green." "3rd choice is Red." ect…
// Hint : Use the array methods taught in class and ternary operator.
// ============================================================
console.log("--- Exercise 2 ---");

const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const position = index + 1;
  // 1 -> "st", 2 -> "nd", 3 -> "rd", everything else -> "th"
  const suffix = position <= 3 ? ordinal[position] : ordinal[0];
  console.log(`${position}${suffix} choice is ${color}.`);
});


// ============================================================
// Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// ------2------
// const country = "USA";
// console.log([...country]);
// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
// ============================================================
console.log("--- Exercise 3 ---");

// 1) My guess : ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);

// 2) My guess : ['U', 'S', 'A'] (the spread operator splits the string into letters)
const country = "USA";
console.log([...country]);

// Bonus) My guess : [undefined, undefined]
// [,,] is an array with 2 empty slots, spreading it turns them into undefined
let newArray = [...[, ,]];
console.log(newArray);


// ============================================================
// 🌟 Exercise 4 : Employees
// Instructions
// Using this array :
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// 1. Using the map() method, push into a new array the firstname of the user and a
//    welcome message. You should get an array that looks like this :
//    const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan",
//    "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
// 3. Bonus : Chain the filter method with a map method, to return an array containing
//    only the lastName of the Full Stack Residents.
// ============================================================
console.log("--- Exercise 4 ---");

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// 1.
const welcomeStudents = users.map((user) => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2.
const fullStackResidents = users.filter((user) => user.role === "Full Stack Resident");
console.log(fullStackResidents);

// 3. Bonus
const residentsLastNames = users
  .filter((user) => user.role === "Full Stack Resident")
  .map((user) => user.lastName);
console.log(residentsLastNames);


// ============================================================
// 🌟 Exercise 5 : Star Wars
// Instructions
// Using this array :
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Use the reduce() method to combine all of these into a single string.
// ============================================================
console.log("--- Exercise 5 ---");

const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const sentence = epic.reduce((accumulator, word) => accumulator + " " + word);
console.log(sentence);


// ============================================================
// 🌟 Exercise 6 : Employees #2
// Instructions
// Using this object :
// const students = [{name: "Ray", course: "Computer Science", isPassed: true},
//                {name: "Liam", course: "Computer Science", isPassed: false},
//                {name: "Jenner", course: "Information Technology", isPassed: true},
//                {name: "Marco", course: "Robotics", isPassed: true},
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false},
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students
// with their name and course name
// (ie. "Good job Jenner, you passed the course in Information Technology",
// "Good Job Marco you passed the course in Robotics" ect…)
// ============================================================
console.log("--- Exercise 6 ---");

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

const passedStudents = students.filter((student) => student.isPassed);
console.log(passedStudents);

// Bonus
students
  .filter((student) => student.isPassed)
  .forEach((student) => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });
