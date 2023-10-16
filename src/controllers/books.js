import BooksModel from "../models/local-system/booksModel.js";

export default class BooksController {
    static async getAll(req, res) {
        const { title, genre } = req.query;
        const books = await BooksModel.getAll(title, genre);

        if(books) return res.json(books);
        else res.status(404).json({ message: 'Not found' });
    }

    static async getByIsbn(req, res) {
        const { isbn } = req.params;
        const book = await BooksModel.getByIsbn(isbn);
        
        if(book) return res.json(books);
        else res.status(404).json({ message: 'Not found' });
    }
}
