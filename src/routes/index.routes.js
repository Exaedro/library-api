import { Router } from 'express';
import BooksController from '../controllers/books.js';

export const router = new Router();

router.get('/library', (req, res) => {
    const books = BooksController.getAll(req, res);
    return books;
});

router.get('/library/:isbn', (req, res) => {
    const book = BooksController.getByIsbn(req, res);
    return book;
});