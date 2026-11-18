"use strict";
// Week 4 - Day 1 - Daily Challenge : Building a Library System with TypeScript Classes and Interfaces
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookDetails(isbn) {
        const book = this.books.find((b) => b.isbn === isbn);
        if (!book) {
            return `No book found with ISBN ${isbn}`;
        }
        const genre = book.genre ? book.genre : "Unknown";
        return `${book.title} by ${book.author} (${book.publishedYear}) - Genre: ${genre} - ISBN: ${book.isbn}`;
    }
    // "books" is private, so the subclass reads it through this protected method
    getAllBooks() {
        return this.books;
    }
}
class DigitalLibrary extends Library {
    constructor(website) {
        super();
        this.website = website;
    }
    listBooks() {
        return this.getAllBooks().map((book) => book.title);
    }
}
const myLibrary = new DigitalLibrary("https://www.my-digital-library.com");
myLibrary.addBook({ title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "111", publishedYear: 1937, genre: "Fantasy" });
myLibrary.addBook({ title: "1984", author: "George Orwell", isbn: "222", publishedYear: 1949, genre: "Dystopia" });
myLibrary.addBook({ title: "Clean Code", author: "Robert C. Martin", isbn: "333", publishedYear: 2008 });
console.log("Website:", myLibrary.website);
console.log(myLibrary.getBookDetails("111"));
console.log(myLibrary.getBookDetails("222"));
console.log(myLibrary.getBookDetails("333"));
console.log(myLibrary.getBookDetails("999"));
console.log("All titles:", myLibrary.listBooks());
