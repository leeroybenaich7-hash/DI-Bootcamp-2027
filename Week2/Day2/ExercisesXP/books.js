// ------------------------------------------------------------
// Exercise 7: My Book List
// Instructions
// The point of this challenge is to display a list of two books on your browser.
// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>
// In the js file, create an array called allBooks. This is an array of objects.
// Each object is a book that has 4 keys (ie. 4 properties) :
// title, author, image : a url, alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
//
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book's title and the book's author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book's details to red.
// ------------------------------------------------------------

const allBooks = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://covers.openlibrary.org/b/isbn/9780062315007-M.jpg",
    alreadyRead: true
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "https://covers.openlibrary.org/b/isbn/9780132350884-M.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

for (const book of allBooks) {
  const div = document.createElement("div");

  const details = document.createElement("p");
  details.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) {
    details.style.color = "red";
  }

  const img = document.createElement("img");
  img.src = book.image;
  img.alt = book.title;
  img.style.width = "100px";

  div.appendChild(details);
  div.appendChild(img);
  section.appendChild(div);
}
