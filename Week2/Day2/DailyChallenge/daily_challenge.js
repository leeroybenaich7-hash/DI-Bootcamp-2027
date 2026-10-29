// ============================================================
// Week 2 - Day 2 - Daily Challenge: Planets
// ============================================================
// Instructions
// In this exercise, we will create a webpage with a black background as the solar system
// and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with the JS file.
//
// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement.
// This div should have a class named "planet".
// Each planet should have a different background color.
// (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
// ------------------------------------------------------------

// Bonus done: an array of objects, so each planet keeps its color and its number of moons
const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "peru", moons: 4 },
  { name: "Saturn", color: "khaki", moons: 3 },
  { name: "Uranus", color: "lightblue", moons: 2 },
  { name: "Neptune", color: "darkblue", moons: 1 }
];

const section = document.querySelector(".listPlanets");

for (const planet of planets) {
  const div = document.createElement("div");
  div.classList.add("planet");
  div.style.backgroundColor = planet.color;
  div.style.margin = "20px 60px";
  div.textContent = planet.name;

  // Bonus: the moons are placed around the planet
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    moon.style.left = 110 + i * 45 + "px";
    moon.style.top = "30px";
    div.appendChild(moon);
  }

  section.appendChild(div);
}
