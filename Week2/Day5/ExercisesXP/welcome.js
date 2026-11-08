// ------------------------------------------------------------
// Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.
// Create a Navbar in your HTML file.
// In your js file, create a self invoking function that takes 1 argument:
// the name of the user that just signed in.
// The function should add a div in the navbar, displaying the name of the user
// and his profile picture.
// ------------------------------------------------------------

(function (userName) {
  const navbar = document.getElementById("navbar");

  const userDiv = document.createElement("div");
  userDiv.classList.add("user");

  const picture = document.createElement("img");
  picture.src = "https://i.pravatar.cc/80?u=" + userName;
  picture.alt = userName + " profile picture";

  const name = document.createElement("span");
  name.textContent = "Welcome, " + userName;

  userDiv.appendChild(picture);
  userDiv.appendChild(name);
  navbar.appendChild(userDiv);
})("John");
