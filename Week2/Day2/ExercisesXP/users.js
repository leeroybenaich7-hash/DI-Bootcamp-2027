// ------------------------------------------------------------
// Exercise 5: Users
// Instructions
// Create a new structured HTML file and a new Javascript file
// <div id="container">Users:</div>
// <ul class="list"><li>John</li><li>Pete</li></ul>
// <ul class="list"><li>David</li><li>Sarah</li><li>Dan</li></ul>
// Add the code above, to your HTML file
//
// Using Javascript:
// Retrieve the div and console.log it
// Change the name "Pete" to "Richard".
// Delete the second <li> of the second <ul>.
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
//
// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.
//
// Using Javascript:
// Add a "light blue" background color and some padding to the <div>.
// Do not display the <li> that contains the text node "Dan". (the last <li> of the first <ul>)
// Add a border to the <li> that contains the text node "Richard". (the second <li> of the <ul>)
// Change the font size of the whole body.
//
// Bonus: If the background color of the div is "light blue",
// alert "Hello x and y" (x and y are the users in the div).
// ------------------------------------------------------------

// Part 1
const container = document.getElementById("container");
console.log(container);

const lists = document.querySelectorAll(".list");
const firstUl = lists[0];
const secondUl = lists[1];

firstUl.children[1].textContent = "Richard";   // Pete -> Richard
secondUl.removeChild(secondUl.children[1]);   // delete Sarah

for (const ul of lists) {
  ul.firstElementChild.textContent = "Leeroy";
}

// Part 2
for (const ul of lists) {
  ul.classList.add("student_list");
}
firstUl.classList.add("university", "attendance");

// Part 3
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

// "Dan" is the last <li> of the second <ul> (after the changes above)
for (const li of document.querySelectorAll("li")) {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
  if (li.textContent === "Richard") {
    li.style.border = "2px solid black";
  }
}

document.body.style.fontSize = "20px";

// Bonus
if (container.style.backgroundColor === "lightblue") {
  const names = firstUl.querySelectorAll("li");
  alert(`Hello ${names[0].textContent} and ${names[1].textContent}`);
}
