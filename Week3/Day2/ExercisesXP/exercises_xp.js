// ============================================================
// Week 3 - Day 2 - Exercises XP : Advanced Object Methods
// ============================================================
// What you will learn:
// Object methods
// Object destructuring
// ============================================================


// ------------------------------------------------------------
// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }
//
// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
//
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// ------------------------------------------------------------
// My prediction:
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

console.log("--- Exercise 1 ---");
const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// ------------------------------------------------------------
// 🌟 Exercise 2 : Display Student Info
// Instructions
// function displayStudentInfo(objUser){
//     //destructuring
// }
//
// displayStudentInfo({first: 'Elie', last:'Schoppik'});
//
// Using the code above, destructure the parameter inside the function
// and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'
// ------------------------------------------------------------

console.log("--- Exercise 2 ---");
function displayStudentInfo({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));


// ------------------------------------------------------------
// 🌟 Exercise 3 : User & id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }
//
// Using methods taught in class, turn the users object into an array:
// Expected output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
//
// Modify the outcome of part 1, by multipling the user's ID by 2.
// Expected output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// ------------------------------------------------------------

console.log("--- Exercise 3 ---");
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1
const usersArray = Object.entries(users);
console.log(usersArray);

// Part 2
const usersDoubleId = usersArray.map(([user, id]) => [user, id * 2]);
console.log(usersDoubleId);


// ------------------------------------------------------------
// Exercise 4 : Person class
// Instructions
// Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// const member = new Person('John');
// console.log(typeof member);
// ------------------------------------------------------------
// My prediction: "object" (an instance of a class is an object)

console.log("--- Exercise 4 ---");
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);


// ------------------------------------------------------------
// 🌟 Exercise 5 : Dog class
// Instructions
// Using the Dog class below:
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
//
// Analyze the options below. Which constructor will successfully extend the Dog class?
// // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };
// // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };
// // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };
// // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };
// ------------------------------------------------------------
// My answer: option 2.
// - Options 1 and 4 use "this" before calling super() -> ReferenceError.
// - Option 3 calls super(name) but "name" is not a parameter of the constructor,
//   so the dog does not get the right name.
// - Option 2 calls super(name) first, then adds size -> correct.

console.log("--- Exercise 5 ---");
class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

const rex = new Labrador("Rex", "large");
console.log(rex);

// Proof that option 1 crashes:
class LabradorOption1 extends Dog {
  constructor(name, size) {
    this.size = size;
  }
}
try {
  new LabradorOption1("Rex", "large");
} catch (error) {
  console.log("Option 1 error:", error.message);
}


// ------------------------------------------------------------
// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)
// [2] === [2]
// {} === {}
//
// What is, for each object below, the value of the property number and why?
// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5};
//
// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)
//
// Create a class Animal with the attributes name, type and color. The type is
// the animal type, for example: dog, cat, dolphin etc ...
//
// Create a class Mammal that extends from the Animal class. Inside the class,
// add a method called sound(). This method takes a parameter: the sound the
// animal makes, and returns the details of the animal (name, type and color)
// as well as the sound it makes.
//
// Create a farmerCow object that is an instance of the class Mammal. The object
// accepts a name, a type and a color and calls the sound method that "moos" her
// information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
// ------------------------------------------------------------

console.log("--- Exercise 6 ---");
// My prediction: both are false, because objects (and arrays) are compared
// by reference, not by value. They are two different objects in memory.
console.log("[2] === [2] :", [2] === [2]);
console.log("{} === {} :", {} === {});

// My prediction: 4, 4, 5
// object1, object2 and object3 point to the SAME object, so changing
// object1.number changes it for all three. object4 is a different object.
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number);
console.log(object3.number);
console.log(object4.number);

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));
