// ------------------------------------------------------------
// Exercise 2: Move the box
// Instructions
// Copy the code above (see move_box.html), to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side
// of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every millisecond,
// until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Notes named JS Functions
// ------------------------------------------------------------

let moveInterval = null;

function myMove() {
  const box = document.getElementById("animate");
  const container = document.getElementById("container");
  // Last position where the box is still inside the container (400 - 50 = 350)
  const maxPosition = container.clientWidth - box.offsetWidth;
  let position = 0;

  // If the user clicks again, restart from the beginning
  clearInterval(moveInterval);

  moveInterval = setInterval(function () {
    if (position >= maxPosition) {
      clearInterval(moveInterval);
    } else {
      position++;
      box.style.left = position + "px";
    }
  }, 1);
}
