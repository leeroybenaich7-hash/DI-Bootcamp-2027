// Week 3 - Day 5 - Exercises XP : Introduction To TypeScript And Key Concepts

// 🌟 Exercise 1: Hello, World! Program
// Create a TypeScript program that logs the message "Hello, World!" to the console.

console.log("Hello, World!");

// 🌟 Exercise 2: Type Annotations
// Define a variable age of type number and a variable name of type string,
// and log them to the console.

const age: number = 20;
const userName: string = "Leeroy";
console.log(userName, age);

// 🌟 Exercise 3: Union Types
// Use union types to declare a variable id that can be either a string or a number.

let id: string | number = 42;
console.log("id (number):", id);
id = "ABC-42";
console.log("id (string):", id);

// 🌟 Exercise 4: Control Flow with if...else
// Write a function that takes a number as input and returns a string indicating
// whether the number is positive, negative, or zero.
// Use if...else statements to control the flow of a program.

function checkNumber(num: number): string {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(5, checkNumber(5));
console.log(-3, checkNumber(-3));
console.log(0, checkNumber(0));

// 🌟 Exercise 5: Tuple Types
// Create a function getDetails that takes a name and age as input and returns a tuple
// containing the input values and a greeting message.
// The tuple should contain multiple values of different types
// const details = getDetails("Alice", 25);
// console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']

function getDetails(name: string, age: number): [string, number, string] {
  const message = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, message];
}

const details = getDetails("Alice", 25);
console.log(details);

// 🌟 Exercise 6: Object Type Annotations
// Create an object type annotation that defines the shape of a Person object.
// The object should have two properties: name (a string) and age (a number).
// Write a function named createPerson that takes two parameters: name (string) and age (number).
// The function should return an object that matches the Person structure.
// Test the createPerson function by creating a person and logging the result to the console.

type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return { name: name, age: age };
}

const person: Person = createPerson("Leeroy", 20);
console.log(person);

// 🌟 Exercise 7: Type Assertions
// Use document.getElementById() to retrieve an HTML element from the DOM.
// Apply a type assertion to cast the element to a specific HTML element type,
// such as HTMLInputElement.
// Once cast, use the properties of the specific element type, like setting the value
// of an input element.
// Ensure that you can successfully set or manipulate a property of the element.
// (Runs in the browser with index.html, which has <input id="username">)

if (typeof document !== "undefined") {
  const input = document.getElementById("username") as HTMLInputElement;
  if (input) {
    input.value = "Leeroy";
    console.log("Input value set to:", input.value);
  }
} else {
  console.log("Exercise 7: open index.html in the browser to test the type assertion.");
}

// 🌟 Exercise 8: switch Statement with Complex Conditions
// Create a function getAction that takes a string representing a user role and returns
// an action for the user. Use a switch statement with complex conditions to handle
// multiple roles.

function getAction(role: string): string {
  switch (role.toLowerCase()) {
    case "admin":
    case "superadmin":
      return "Manage users and settings";
    case "editor":
    case "author":
      return "Edit content";
    case "viewer":
      return "View content";
    case "guest":
      return "Limited access";
    default:
      return "Invalid role";
  }
}

console.log(getAction("admin")); // Manage users and settings
console.log(getAction("editor")); // Edit content
console.log(getAction("viewer")); // View content
console.log(getAction("guest")); // Limited access
console.log(getAction("unknown")); // Invalid role

// 🌟 Exercise 9: Function Overloading with Default Parameters
// Create an overloaded function greet that can either take a name and greet the person,
// or take no arguments and return a default greeting.

function greet(): string;
function greet(name: string): string;
function greet(name: string = "there"): string {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, there!
console.log(greet("Leeroy")); // Hello, Leeroy!
