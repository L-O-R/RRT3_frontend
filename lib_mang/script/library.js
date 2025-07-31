import BookClass from "./books.js";

class Library {
  constructor(name, location, books = []) {
    this.name = name;
    this.location = location;
    this.books = books; // Array of Book objects
  }

  addBook(book) {
    if (book instanceof BookClass) {
      this.books.push(book);
    } else {
      throw new Error("Invalid book object");
    }
  }
}

export default Library;
