import data from "../../db/library.json" assert { type: "json" };

export default class BooksModel {
  static async getAll(title, genre, year) {
    if (title) {
      const bookFound = data.library.find(
        (elem) => elem.book.title.toLowerCase() == title.toLowerCase(),
      );
      return bookFound;
    }
    if (genre) {
      const booksFiltered = data.library.filter(
        (elem) => elem.book.genre.toLowerCase() == genre.toLowerCase(),
      );
      return booksFiltered;
    }
    if (year) {
      const booksFiltered = data.library.filter(
        (elem) => elem.book.year == year,
      );
      return booksFiltered;
    }

    return data.library;
  }

  static async getByIsbn(isbn) {
    const bookFound = data.library.find((elem) => elem.book.ISBN == isbn);
    return bookFound;
  }
}
