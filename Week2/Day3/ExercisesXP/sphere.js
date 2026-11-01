// ------------------------------------------------------------
// Exercise 4: Volume of a sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere.
// Use the code below as a base (see sphere.html).
// ------------------------------------------------------------

// Volume of a sphere = 4/3 * PI * radius^3
function calculateVolume(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

const myForm = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const radius = Number(radiusInput.value);

  if (isNaN(radius) || radius < 0) {
    volumeInput.value = "Please enter a positive number";
    return;
  }

  volumeInput.value = calculateVolume(radius).toFixed(2);
});
