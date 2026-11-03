// ------------------------------------------------------------
// Mini-Project - Coloring Game
// What you will learn :
// DOM Events
// DOM Tree
//
// Project summary
// Welcome to Coloring Squares.
// Your task is to create a coloring game similar to the working project above.
// You will need to use HTML, CSS and JS to complete this task.
//
// Some things to consider...
// HTML, CSS :
// How will you create the grid of colors ?
// How will you create the grid of empty squares ?
// Hint... GRID :P
//
// JS :
// How does a user pick a color ?
// How does the drawing work ? How do you know when the user clicks and drags ?
// Hint: look at the JS events mousedown, mouseup and mouseover.
// ------------------------------------------------------------

const colors = [
  "red", "orangered", "orange", "yellow", "yellowgreen", "lightgreen", "green",
  "turquoise", "cyan", "lightskyblue", "dodgerblue", "blue", "darkblue", "indigo",
  "darkmagenta", "violet", "lightpink", "lightgray", "gray", "black", "white"
];

const palette = document.getElementById("palette");
const grid = document.getElementById("grid");
const currentColorBox = document.getElementById("current-color");
const clearButton = document.getElementById("clear");

let selectedColor = "black";
let isDrawing = false;

// 1. Create the grid of colors
for (const color of colors) {
  const colorDiv = document.createElement("div");
  colorDiv.classList.add("color");
  colorDiv.style.backgroundColor = color;

  // The user picks a color by clicking on it
  colorDiv.addEventListener("click", function () {
    selectedColor = color;
    currentColorBox.style.backgroundColor = color;
    for (const div of document.querySelectorAll(".color")) {
      div.classList.remove("selected");
    }
    colorDiv.classList.add("selected");
  });

  palette.appendChild(colorDiv);
}
currentColorBox.style.backgroundColor = selectedColor;

// 2. Create the grid of empty squares (40 x 25)
for (let i = 0; i < 40 * 25; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  // Click on a square = color it and start drawing
  square.addEventListener("mousedown", function () {
    isDrawing = true;
    square.style.backgroundColor = selectedColor;
  });

  // Drag over the squares = color them while the mouse is down
  square.addEventListener("mouseover", function () {
    if (isDrawing) {
      square.style.backgroundColor = selectedColor;
    }
  });

  grid.appendChild(square);
}

// 3. Stop drawing when the mouse button is released (anywhere on the page)
document.addEventListener("mouseup", function () {
  isDrawing = false;
});

// Bonus: a button to clear the drawing
clearButton.addEventListener("click", function () {
  for (const square of document.querySelectorAll(".square")) {
    square.style.backgroundColor = "";
  }
});
