// ------------------------------------------------------------
// Exercise 1: Timer
// Instructions
// Using this code (see timer.html):
// <div id="container"></div>
// <button id="clear">Clear Interval</button>
//
// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert "Hello World".
//
// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
//
// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval)
// as soon as there will be 5 paragraphs inside the <div id="container">.
// ------------------------------------------------------------

const container = document.getElementById("container");
const clearButton = document.getElementById("clear");

function addHelloWorld() {
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}

// Part I
setTimeout(function () {
  alert("Hello World");
}, 2000);

// Part II
setTimeout(addHelloWorld, 2000);

// Part III
const intervalId = setInterval(function () {
  addHelloWorld();
  // Stop as soon as there are 5 paragraphs in the container
  if (container.querySelectorAll("p").length >= 5) {
    clearInterval(intervalId);
  }
}, 2000);

// Stop when the user clicks on the button
clearButton.addEventListener("click", function () {
  clearInterval(intervalId);
});
