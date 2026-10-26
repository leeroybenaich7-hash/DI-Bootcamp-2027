// ============================================================
// Week 2 - Day 1 - Exercises XP
// ============================================================


// ------------------------------------------------------------
// Exercise 1: List of people
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];
//
// Part I - Review about arrays
// 1. Write code to remove "Greg" from the people array.
// 2. Write code to replace "James" with "Jason".
// 3. Write code to add your name to the end of the people array.
// 4. Write code that console.logs Mary's index. Take a look at the indexOf method on Google.
// 5. Write code to make a copy of the people array using the slice method.
//    The copy should NOT include "Mary" or your name.
//    Hint: Remember that now the people array should look like this
//    const people = ["Mary", "Devon", "Jason", "Yourname"];
// 6. Write code that gives the index of "Foo". Why does it return -1 ?
// 7. Create a variable called last which value is the last element of the array.
//    Hint: What is the relationship between the index of the last element
//    in the array and the length of the array?
//
// Part II - Loops
// 1. Using a loop, iterate through the people array and console.log each person.
// 2. Using a loop, iterate through the people array and exit the loop
//    after you console.log "Devon".
//    Hint: take a look at the break statement in the lesson.
// ------------------------------------------------------------

const people = ["Greg", "Mary", "Devon", "James"];

// Part I
people.shift();                      // remove "Greg"
people[people.indexOf("James")] = "Jason";
people.push("Leeroy");
console.log(people.indexOf("Mary")); // 0

const peopleCopy = people.slice(1, 3); // ["Devon", "Jason"]
console.log(peopleCopy);

// "Foo" is not in the array, so indexOf returns -1 (it means "not found")
console.log(people.indexOf("Foo"));

const last = people[people.length - 1]; // the last index is always length - 1
console.log(last);

// Part II
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}


// ------------------------------------------------------------
// Exercise 2: Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so:
// "My #1 choice is blue", "My #2 choice is red" ect... .
// Bonus: Change it to console.log "My 1st choice", "My 2nd choice",
// "My 3rd choice", picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
// ------------------------------------------------------------

const colors = ["blue", "red", "green", "black", "white"];

for (let i = 0; i < colors.length; i++) {
  console.log("My #" + (i + 1) + " choice is " + colors[i]);
}

// Bonus
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log("My " + (i + 1) + suffixes[i] + " choice is " + colors[i]);
}


// ------------------------------------------------------------
// Exercise 3: Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt
// (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// ------------------------------------------------------------

// prompt() always returns a string, so we convert it with Number()
// do...while is the best choice: we need to ask at least once
let number;
do {
  const answer = prompt("Enter a number:");
  console.log(typeof answer); // "string"
  number = Number(answer);
} while (number < 10);
console.log("Your number is " + number);


// ------------------------------------------------------------
// Exercise 4: Building Management
// Instructions:
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent: {
//         sarah: [3, 990],
//         dan: [4, 1000],
//         david: [1, 500],
//     },
// }
//
// Review About Objects
// 1. Copy and paste the above object to your Javascript file.
// 2. Console.log the number of floors in the building.
// 3. Console.log how many apartments are on the floors 1 and 3.
// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.
// 5. Check if the sum of Sarah's and David's rent is bigger than Dan's rent.
//    If it is, then increase Dan's rent to 1200.
// ------------------------------------------------------------

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

const secondTenant = building.nameOfTenants[1];
console.log(secondTenant, building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0]);

const rents = building.numberOfRoomsAndRent;
if (rents.sarah[1] + rents.david[1] > rents.dan[1]) {
  rents.dan[1] = 1200;
}
console.log("Dan's rent:", rents.dan[1]);


// ------------------------------------------------------------
// Exercise 5: Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
// ------------------------------------------------------------

const family = {
  father: "Dad",
  mother: "Mom",
  son: "Leeroy",
};

for (const key in family) {
  console.log(key);
}

for (const key in family) {
  console.log(family[key]);
}


// ------------------------------------------------------------
// Exercise 6: Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }
// Given the object above and using a for loop,
// console.log "my name is Rudolf the reindeer"
// ------------------------------------------------------------

const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};

let sentence = "";
for (const key in details) {
  sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim());


// ------------------------------------------------------------
// Exercise 7: Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society.
// The society's name will be the first letter of each of their names
// sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be "ABJKPS"
// ------------------------------------------------------------

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = "";
const sortedNames = names.slice().sort();
for (let i = 0; i < sortedNames.length; i++) {
  secretName += sortedNames[i][0];
}
console.log(secretName);
