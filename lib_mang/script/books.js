class Book {
  constructor(
    bookTitle,
    isbn,
    author,
    genre,
    quantity,
    year,
    borrowedCopies
  ) {
    this.bookTitle = bookTitle;
    this.isbn = isbn;
    this.author = author;
    this.genre = genre;
    this.quantity = quantity || 1;
    this.year = year || NaN;
    this.borrowedCopies = borrowedCopies || 0;
  }
}

export default Book;
