// ------------------------------------------------------------
// Exercise 1: Change the article
// Instructions
// Copy the code below, into a structured HTML file:
// <article>
//   <h1> Some Facts </h1>
//   <h2> The Chocolate </h2>
//   <h3> History of the chocolate </h3>
//   <p> Chocolate is made from tropical Theobroma cacao tree seeds. ... </p>
//   <p> After the European discovery of the Americas, ... </p>
//   <p> Chocolate has since become a popular food product ... </p>
//   <p> But what effect does eating chocolate have on our health?</p>
// </article>
//
// Using a DOM property, retrieve the h1 and console.log it.
// Using DOM methods, remove the last paragraph in the <article> tag.
// Add a event listener which will change the background color of the h2 to red, when it's clicked on.
// Add an event listener which will hide the h3 when it's clicked on (use the display:none property).
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out "fade css animation" on Google)
// ------------------------------------------------------------

// Retrieve the h1 with a DOM property
const article = document.querySelector("article");
const h1 = article.firstElementChild;
console.log(h1);

// Remove the last paragraph of the article
const lastParagraph = article.lastElementChild;
lastParagraph.remove();

// Click on the h2 -> red background
const h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});

// Click on the h3 -> hide it
const h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
  h3.style.display = "none";
});

// Button -> all the paragraphs in bold
const boldButton = document.getElementById("boldButton");
boldButton.addEventListener("click", function () {
  const paragraphs = document.querySelectorAll("p");
  for (const paragraph of paragraphs) {
    paragraph.style.fontWeight = "bold";
  }
});

// Bonus: hover on the h1 -> random font size between 0 and 100px
h1.addEventListener("mouseover", function () {
  const randomSize = Math.floor(Math.random() * 101);
  h1.style.fontSize = randomSize + "px";
});

// Bonus: hover on the 2nd paragraph -> fade out
const secondParagraph = document.querySelectorAll("p")[1];
secondParagraph.addEventListener("mouseover", function () {
  secondParagraph.classList.add("fade-out");
});
