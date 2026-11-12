// ============================================================
// Week 3 - Day 3 - Daily Challenge : HTML Form
// ============================================================
// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs,
// and append it on the DOM as a JSON string.
// ============================================================

const form = document.getElementById("userForm");
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  // stop the page from reloading
  event.preventDefault();

  // retrieve the data from the inputs
  const user = {
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
  };

  // convert the object to a JSON string and append it on the DOM
  const p = document.createElement("p");
  p.textContent = JSON.stringify(user);
  output.appendChild(p);
});
