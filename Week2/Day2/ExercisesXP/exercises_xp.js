// ============================================================
// Week 2 - Day 2 - Exercises XP (Exercises 1 to 4)
// Exercises 5, 6 and 7 are in users.html/js, navbar.html/js, books.html/js
// ============================================================


// ------------------------------------------------------------
// Exercise 1: Find the numbers divisible by 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345
// 368 391 414 437 460 483
// Sum : 5313
// Bonus: Add a parameter divisor to the function.
// displayNumbersDivisible(divisor)
// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, and their sum
// ------------------------------------------------------------

// Bonus done: the divisor is a parameter (23 by default)
function displayNumbersDivisible(divisor = 23) {
  let numbers = "";
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      numbers += i + " ";
      sum += i;
    }
  }
  console.log(numbers);
  console.log("Sum : " + sum);
}

displayNumbersDivisible();
displayNumbersDivisible(3);
displayNumbersDivisible(45);


// ------------------------------------------------------------
// Exercise 2: Shopping List
// Instructions
// const stock = { "banana": 6, "apple": 0, "pear": 12, "orange": 32, "blueberry":1 }
// const prices = { "banana": 4, "apple": 2, "pear": 1, "orange": 1.5, "blueberry":10 }
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: "banana",
// "orange", and "apple". It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item's stock by 1
// ------------------------------------------------------------

const stock = {
  "banana": 6,
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry": 1
};

const prices = {
  "banana": 4,
  "apple": 2,
  "pear": 1,
  "orange": 1.5,
  "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (const item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--; // Bonus
    }
  }
  return total;
}

console.log("My bill: " + myBill()); // 5.5 (apple is out of stock)
console.log(stock);


// ------------------------------------------------------------
// Exercise 3: What's in my wallet ?
// Instructions
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item's price, the function should return true
// If the sum of the change is smaller than the item's price, the function should return false
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25, A dimes is 0.10, A nickel is 0.05, A penny is 0.01
// changeEnough(4.25, [25, 20, 5, 0]) => true (6.25 + 2 + .25 + 0 = 8.50)
// Examples
// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true
// ------------------------------------------------------------

function changeEnough(itemPrice, amountOfChange) {
  const values = [0.25, 0.10, 0.05, 0.01];
  let total = 0;
  for (let i = 0; i < amountOfChange.length; i++) {
    total += amountOfChange[i] * values[i];
  }
  return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));  // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5]));   // true


// ------------------------------------------------------------
// Exercise 4: Vacations Costs
// Instructions
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn't answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn't answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// "London": 183$, "Paris" : 220$, All other destination : 300$
// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn't answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
// Define a function called totalVacationCost() that returns the total cost of the
// user's vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost()
// inside the function totalVacationCost().
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt
// inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
// ------------------------------------------------------------

// Bonus done: the 3 functions receive the answer as a parameter,
// all the prompts are inside totalVacationCost()

function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  if (destination === "London") {
    return 183;
  } else if (destination === "Paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) {
    cost = cost * 0.95; // 5% discount
  }
  return cost;
}

// Ask again while the answer is empty or not a number
function askNumber(question) {
  let answer = prompt(question);
  while (answer === null || answer.trim() === "" || isNaN(answer)) {
    answer = prompt(question);
  }
  return Number(answer);
}

// Ask again while the answer is empty or is a number (not a word)
function askText(question) {
  let answer = prompt(question);
  while (answer === null || answer.trim() === "" || !isNaN(answer)) {
    answer = prompt(question);
  }
  return answer.trim();
}

function totalVacationCost() {
  const nights = askNumber("How many nights would you like to stay in the hotel?");
  const destination = askText("What is your destination?");
  const days = askNumber("How many days would you like to rent the car?");

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
  return hotel + plane + car;
}

console.log("Total vacation cost: $" + totalVacationCost());
