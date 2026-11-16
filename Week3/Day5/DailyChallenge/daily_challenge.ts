// Week 3 - Day 5 - Daily Challenge: Union Type Validator
//
// Create a function called validateUnionType that accepts a value and an array of
// allowed types (as strings). The function should check if the value is of one of the
// allowed types and return true if it is; otherwise, it should return false.
// Use this function to validate the type of variables in a program.
//
// Create a function called validateUnionType(value: any, allowedTypes: string[]): boolean
// that takes a value and an array of allowed types (as strings). The function should
// return true if the value is one of the allowed types; otherwise, it should return false.
// Demonstrate its usage by validating variables with different types.

function validateUnionType(value: any, allowedTypes: string[]): boolean {
  const valueType: string = typeof value;
  for (const type of allowedTypes) {
    if (valueType === type) {
      return true;
    }
  }
  return false;
}

// Demonstration
const myName: string = "Leeroy";
const myAge: number = 20;
const isStudent: boolean = true;
const shoeSize: string | number = 43;
const laptop: object = { brand: "MacBook" };

console.log(validateUnionType(myName, ["string", "number"])); // true
console.log(validateUnionType(myAge, ["string", "number"])); // true
console.log(validateUnionType(isStudent, ["string", "number"])); // false
console.log(validateUnionType(shoeSize, ["number"])); // true
console.log(validateUnionType(laptop, ["string", "boolean"])); // false
console.log(validateUnionType(laptop, ["object"])); // true
console.log(validateUnionType(undefined, ["string", "number"])); // false
