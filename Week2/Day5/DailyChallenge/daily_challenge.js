// ============================================================
// Week 2 - Day 5 - Daily Challenge : Groceries
// ============================================================
// What you will learn:
// Objects
// Reference vs Value
//
// Instructions
// Using this object :
// let client = "John";
// const groceries = {
//     fruits : ["pear", "apple", "banana"],
//     vegetables: ["tomatoes", "cucumber", "salad"],
//     totalPrice : "20$",
//     other : {
//         paid : true,
//         meansOfPayment : ["cash", "creditCard"]
//     }
// }
// Hint: To do this daily challenge, take a look at today's lesson
// "Pass By Value & Pass By Reference"
//
// Create an arrow function named displayGroceries, that console.logs the 3 fruits
// from the groceries object. Use the forEach method.
//
// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable.
// (Tip : make the user variable equal to the client variable)
// Change the client variable to "Betty". Will we also see this modification in the
// user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification
// in the shopping object ? Why ?
// Change the value of the paid key to false. Will we also see this modification
// in the shopping object ? Why ?
//
// Invoke the cloneGroceries function.
// ============================================================

let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

const cloneGroceries = () => {
  // A string is a primitive: it is copied BY VALUE.
  let user = client;
  client = "Betty";
  console.log("client:", client, "| user:", user);
  // -> user is still "John". No, we don't see the change in user,
  // because user got its own copy of the value "John".

  // An object is copied BY REFERENCE: shopping and groceries point to the same object.
  const shopping = groceries;

  groceries.totalPrice = "35$";
  console.log("shopping.totalPrice:", shopping.totalPrice);
  // -> "35$". Yes, we see the change in shopping,
  // because both variables share the same object in memory.

  groceries.other.paid = false;
  console.log("shopping.other.paid:", shopping.other.paid);
  // -> false. Yes, we see it too: the nested object "other" is also
  // the same reference for groceries and shopping.
};

displayGroceries();
cloneGroceries();
