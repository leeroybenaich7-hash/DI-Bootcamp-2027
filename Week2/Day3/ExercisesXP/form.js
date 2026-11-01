// ------------------------------------------------------------
// Exercise 2: Work with forms
// Instructions
// Copy the code below, into a structured HTML file:
// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form>
// <ul class="usersAnswer"></ul>
//
// Retrieve the form and console.log it.
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.
// When the user submits the form (ie. submit event listener)
//   use event.preventDefault(), why ?
//   get the values of the input tags,
//   make sure that they are not empty,
//   create an li per input value,
//   then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :
// <ul class="usersAnswer">
//   <li>first name of the user</li>
//   <li>last name of the user</li>
// </ul>
// ------------------------------------------------------------

// Retrieve the form
const form = document.querySelector("form");
console.log(form);

// Retrieve the inputs by their id
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
console.log(firstNameInput, lastNameInput);

// Retrieve the inputs by their name attribute
const firstNameByName = document.getElementsByName("firstname")[0];
const lastNameByName = document.getElementsByName("lastname")[0];
console.log(firstNameByName, lastNameByName);

const usersAnswer = document.querySelector(".usersAnswer");

form.addEventListener("submit", function (event) {
  // Why preventDefault? By default the form reloads the page when it is submitted,
  // so we would lose what we want to display. preventDefault stops that.
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  // Make sure the values are not empty
  if (firstName === "" || lastName === "") {
    alert("Please fill in your first name and your last name");
    return;
  }

  // Empty the list so the answers are not added twice
  usersAnswer.innerHTML = "";

  // Create one li per input value
  for (const value of [firstName, lastName]) {
    const li = document.createElement("li");
    li.textContent = value;
    usersAnswer.appendChild(li);
  }
});
