import BooksModel from "../models/local-system/booksModel.js";

export default class BooksController {
  static async getAll(req, res) {
    const { title, genre, year } = req.query;
    try {
      const books = await BooksModel.getAll(title, genre, year);

      if (books) return res.json(books);
      else res.status(404).json({ message: "Not found" });
    } catch (e) {
      res.status(505).json({ message: "Error on server", error: e });
    }
  }

  static async getByIsbn(req, res) {
    const { isbn } = req.params;
    try {
      const book = await BooksModel.getByIsbn(isbn);

      if (book) return res.json(book);
      else res.status(404).json({ message: "Not found" });
    } catch (e) {
      res.status(500).json({ message: "Error on server", error: e });
    }
  }
}
