import BookClass from "./books.js";

class Library {
  constructor(name, location, books = []) {
    this.name = name;
    this.location = location;
    this.books = books; // Array of Book objects
  }

  // method to fetch book
  fetchBook(bookIsbn) {
    return this.books.find(
      (book) => book.isbn === bookIsbn
    );
  }

  displayBooks(myLibrary) {
    if (myLibrary.books) {
      const bookCollection = document.getElementById(
        "book-collection"
      );
      bookCollection.innerHTML = " ";
      myLibrary.books.forEach((book) => {
        const div = document.createElement("div");
        div.classList.add("book-item");
        div.innerHTML = `
          <h2>${book.bookTitle}</h2>
          <h3>${book.author}</h3>
          <p>ISBN: ${book.isbn}</p>
          <span>Genre: ${book.genre}</span>
          <span>Quantity: ${book.quantity}</span>
          <span>Published Year: ${book.year}</span>
          <p id = "error"></p>
          <button id = borrow-${book.isbn} >Borrow book</button>
          <button id = return-${book.isbn}>Return Book</button>
        `;
        bookCollection.appendChild(div);

        const borrowbtn = document.getElementById(
          `borrow-${book.isbn}`
        );
        const returnbtn = document.getElementById(
          `return-${book.isbn}`
        );
        borrowbtn.addEventListener("click", () => {
          book.borrowCopy();
          this.displayBooks(myLibrary); // refresh trigger
        });
        returnbtn.addEventListener("click", () => {
          book.returnCopy();
          this.displayBooks(myLibrary);
        });
      });
    }
  }

  addBook(book, myLibrary) {
    if (book instanceof BookClass) {
      const existingBook = this.fetchBook(book.isbn);
      if (existingBook) {
        existingBook.quantity += book.quantity; // Update quantity if book already exists
      } else {
        this.books.push(book);
      }
    } else {
      throw new Error("Invalid book object");
    }

    this.displayBooks(myLibrary);
  }
}

export default Library;
