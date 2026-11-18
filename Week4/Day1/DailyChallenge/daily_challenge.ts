// Week 4 - Day 1 - Daily Challenge : Building a Library System with TypeScript Classes and Interfaces

// Instructions
// Create a simple library system with TypeScript:
//
// Interface Book: Define an interface Book with the following properties:
// - title (string)
// - author (string)
// - isbn (string)
// - publishedYear (number)
// - An optional genre property (string)
//
// Class Library: Create a class Library with:
// - A private property books (array of Book).
// - A public method addBook to add a new book to the library.
// - A public method getBookDetails that returns details of a book based on the isbn.
//
// Class DigitalLibrary: Create a class DigitalLibrary that extends Library and adds:
// - A readonly property website (string) for the library's website.
// - A public method listBooks that returns a list of all book titles in the library.
//
// Create an instance of DigitalLibrary, add some books to it, and then print out
// the details of the books and the list of all book titles.

interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): string {
    const book = this.books.find((b) => b.isbn === isbn);
    if (!book) {
      return `No book found with ISBN ${isbn}`;
    }
    const genre = book.genre ? book.genre : "Unknown";
    return `${book.title} by ${book.author} (${book.publishedYear}) - Genre: ${genre} - ISBN: ${book.isbn}`;
  }

  // "books" is private, so the subclass reads it through this protected method
  protected getAllBooks(): Book[] {
    return this.books;
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
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
