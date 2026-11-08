// ============================================================
// Week 2 - Day 5 - Exercises XP (Exercises 1 to 5)
// Exercise 6 is in fortune.html / fortune.js
// Exercise 7 is in welcome.html / welcome.js
// Exercise 8 is in juice.html / juice.js
// ============================================================

// In the browser, alert() shows a popup. In Node there is no alert,
// so we use console.log instead to be able to test the code.
const show = typeof alert === "function" ? alert : console.log;


// ------------------------------------------------------------
// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
//
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared
// // with const instead of let ?
//
// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }
// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }
// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared
// // with const instead of let ?
//
// //#3
// function funcFour() {
//     window.a = "hello";
// }
// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }
// // #3.1 - run in the console:
// funcFour()
// funcFive()
//
// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }
// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared
// // with const instead of let ?
//
// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);
// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared
// // with const instead of let ?
// ------------------------------------------------------------
// Note: the 5 parts all declare "let a", so each part is put inside
// its own block { } to be able to run them in the same file.

// #1
{
  function funcOne() {
    let a = 5;
    if (a > 1) {
      a = 3;
    }
    show(`inside the funcOne function ${a}`);
  }
  // #1.1 Prediction: "inside the funcOne function 3"
  // because 5 > 1 is true, so a is changed to 3 before the alert.
  funcOne();

  // #1.2 Prediction: with const, a = 3 throws an error
  // "TypeError: Assignment to constant variable." (a const can't be reassigned).
  function funcOneConst() {
    const a = 5;
    if (a > 1) {
      a = 3;
    }
    show(`inside the funcOne function ${a}`);
  }
  try {
    funcOneConst();
  } catch (error) {
    console.log("#1.2 ->", error.message);
  }
}

// #2
{
  let a = 0;
  function funcTwo() {
    a = 5;
  }
  function funcThree() {
    show(`inside the funcThree function ${a}`);
  }
  // #2.1 Prediction: first "inside the funcThree function 0",
  // then funcTwo() changes the outer a to 5,
  // so the second call shows "inside the funcThree function 5".
  funcThree();
  funcTwo();
  funcThree();

  // #2.2 Prediction: with const, funcTwo() throws
  // "TypeError: Assignment to constant variable." because it tries to change a.
  const b = 0;
  function funcTwoConst() {
    b = 5;
  }
  try {
    funcTwoConst();
  } catch (error) {
    console.log("#2.2 ->", error.message);
  }
}

// #3
{
  // In the browser "window" is the global object. In Node it is "globalThis".
  const globalObject = typeof window !== "undefined" ? window : globalThis;
  function funcFour() {
    globalObject.a = "hello";
  }
  function funcFive() {
    show(`inside the funcFive function ${globalObject.a}`);
  }
  // #3.1 Prediction: "inside the funcFive function hello"
  // funcFour() creates a global variable a = "hello", and funcFive() reads it.
  funcFour();
  funcFive();
}

// #4
{
  let a = 1;
  function funcSix() {
    let a = "test";
    show(`inside the funcSix function ${a}`);
  }
  // #4.1 Prediction: "inside the funcSix function test"
  // the a inside the function is a new local variable that hides the outer a.
  funcSix();
  // #4.2 Prediction: with const it is the same result "test",
  // because we never reassign a, we only declare a new one in the function.
}

// #5
{
  let a = 2;
  if (true) {
    let a = 5;
    show(`in the if block ${a}`);
  }
  show(`outside of the if block ${a}`);
  // #5.1 Prediction: "in the if block 5" then "outside of the if block 2"
  // let is block scoped: the a inside the if only exists inside the if.
  // #5.2 Prediction: with const the result is the same (5 then 2),
  // const is also block scoped and nothing is reassigned.
}


// ------------------------------------------------------------
// Exercise 2 : Ternary operator
// Instructions
// Using the code below:
// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true,
// the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.
// ------------------------------------------------------------

const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log("Experience points:", experiencePoints);


// ------------------------------------------------------------
// Exercise 3 : Is it a string ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument
// passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:
// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false
// ------------------------------------------------------------

const isString = (value) => typeof value === "string";
console.log(isString("hello"));      // true
console.log(isString([1, 2, 4, 0])); // false


// ------------------------------------------------------------
// Exercise 4 : Find the sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers
// as parameters and returns the sum.
// ------------------------------------------------------------

const sum = (num1, num2) => num1 + num2;
console.log("Sum of 4 and 6:", sum(4, 6));


// ------------------------------------------------------------
// Exercise 5 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams.
// (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.
// ------------------------------------------------------------

// Function declaration
function kgToGrams(kg) {
  return kg * 1000;
}
console.log("Declaration: 2 kg =", kgToGrams(2), "g");

// Function expression
const kgToGramsExpression = function (kg) {
  return kg * 1000;
};
console.log("Expression: 3 kg =", kgToGramsExpression(3), "g");

// Difference: a function declaration is hoisted (it can be called before it is written), a function expression is not.

// One line arrow function
const kgToGramsArrow = (kg) => kg * 1000;
console.log("Arrow: 1.5 kg =", kgToGramsArrow(1.5), "g");
