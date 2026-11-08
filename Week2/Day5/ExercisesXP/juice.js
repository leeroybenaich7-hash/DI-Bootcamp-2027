// ------------------------------------------------------------
// Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.
//
// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage
// the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on
// the DOM a sentence like The client wants a <size drink> juice, containing
// <first ingredient>, <second ingredient>, <third ingredient>".
// Invoke the inner function ONCE inside the outer function. Then invoke the outer
// function in the global scope.
//
// Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into
// the ingredients array.
// Create a new inner function named displayJuice that displays on the DOM a sentence
// like The client wants a <size drink> juice, containing <first ingredient>,
// <second ingredient>, <third ingredient>".
// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients
// function TWICE. Then invoke once the displayJuice function. Finally, invoke the
// makeJuice function in the global scope.
// ------------------------------------------------------------

const juiceDiv = document.getElementById("juice");

// Part I
function makeJuicePartOne(size) {
  function addIngredients(first, second, third) {
    const p = document.createElement("p");
    p.textContent = `Part I: The client wants a ${size} juice, containing ${first}, ${second}, ${third}.`;
    juiceDiv.appendChild(p);
  }
  addIngredients("apple", "carrot", "ginger");
}
makeJuicePartOne("medium");

// Part II
function makeJuice(size) {
  const ingredients = [];

  function addIngredients(first, second, third) {
    ingredients.push(first, second, third);
  }

  function displayJuice() {
    const p = document.createElement("p");
    p.textContent = `Part II: The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    juiceDiv.appendChild(p);
  }

  addIngredients("orange", "mango", "banana");
  addIngredients("strawberry", "mint", "lemon");
  displayJuice();
}
makeJuice("large");
